const noteListEl = document.querySelector(".list-group")
const newNoteBtn = document.querySelector(".new-note")
const saveNoteBtn = document.querySelector(".save-note")
const noteTitle = document.querySelector('.note-title');
const noteText = document.querySelector('.note-textarea');
let activeNote = {};

const show = (elem)=>{
  elem.style.display = "inline"
}

const hide = (elem)=>{
  elem.style.display = "hide"
}

const fetchNotes = ()=>{
  return fetch('/api/notes', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

const renderActiveNote = ()=>{
  hide(saveNoteBtn);
  if(activeNote.id){
    noteTitle.setAttribute("readonly", true)
    noteText.setAttribute("readonly", true)
    noteTitle.value = activeNote.title;
    noteText.value = activeNote.text;
  } else {
    noteTitle.setAttribute("readonly", false);
    noteText.setAttribute("readonly", false)
    noteTitle.value = "";
    noteText.value = ""
  }
}

const handleNoteView = (e)=>{
  e.preventDefault();
  activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'))
  console.log(activeNote)
  renderActiveNote();
}

const handleNoteDelete = ()=>{


}

const renderNotes = async(notes)=>{
  let jsonNotes = await notes.json();
  const createLi = (title, )=>{
    const liEl = document.createElement("li");
    liEl.classList.add(".list-group-item");
    const spanEl = document.createElement("span");
    spanEl.textContent = title;
    spanEl.classList.add(".list-item-title")
    spanEl.addEventListener("click", handleNoteView)
    liEl.append(spanEl);
    const delBtnEl = document.createElement("i");
    delBtnEl.classList.add(
      'fas',
      'fa-trash-alt',
      'float-right',
      'text-danger',
      'delete-note'
    );
    delBtnEl.addEventListener("click", handleNoteDelete)
    liEl.append(delBtnEl)
    return liEl;
  }
  
  jsonNotes.forEach((item)=>{
    const liEl = createLi(item.title)
    liEl.dataset.note = JSON.stringify(item)
    noteListEl.append(liEl)
  })
  }


fetchNotes().then(renderNotes)


const handleNewNoteView = (e)=>{
e.preventDefault();
activeNote
}

newNoteBtn.addEventListener("click", handleNewNoteView)



            
