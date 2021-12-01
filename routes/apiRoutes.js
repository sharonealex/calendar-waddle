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

router.delete('/notes/:id', (req, res)=>{
    store.deleteNotes(req.params.id).then(()=>{
        res.json({ok: true})
    })
})

module.exports = router;