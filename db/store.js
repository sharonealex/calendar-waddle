const fs = require("fs");
const uuid = require("uuid")
const utils = require("util");
const exp = require("constants");

const readFileAsync = utils.promisify(fs.readFile);
const writeFileAsync = utils.promisify(fs.writeFile);

class Store {
read(){
    return readFileAsync('db/db.json', 'utf-8');
}

write(note){
    return writeFileAsync('db/db.json', JSON.stringify(note));
}

getNotes(){
    
   return this.read().then((data)=>{
        return JSON.parse(data)
    })
}

addNotes(note){
    const {title, text} = note;
    const newNote = {title, text, id:uuid()}
    return this.getNotes().then((data)=>{
        const notesList = JSON.parse(data);
        return notesList.push(newNote);
    }).then((updatedData)=>{
        this.write(updatedData).then(()=>{
            return newNote;
        })
    })
}

deleteNotes(id){
    return this.getNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => this.write(filteredNotes));
}
}

module.exports = new Store();

