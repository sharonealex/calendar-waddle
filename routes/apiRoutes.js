const router = require("express").Router();
const store = require("../db/store")

router.get("/notes", (req, res)=>{
    
    store.getNotes().then((data)=>{
        return res.json(data)
    })
})


router.post("/notes", (req, res)=>{
    store.addNotes(req.body).then((data)=>{
        return res.json(data)

    })
})

module.exports = router;