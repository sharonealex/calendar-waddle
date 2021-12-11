const router = require("express").Router();

const Traveller = require("../../models/Traveller")


router.get("/", async(req, res)=>{
    try{
        const travellers = await Traveller.findAll();
        console.log(travellers)
        res.status(200).json(travellers);
    } catch(e){
        console.log(e)
    }
   
});

router.get("/:id", async(req, res)=>{
    res.status(200).json(await Traveller.findByPk(req.params.id))
})

router.post("/", async(req, res)=>{
    res.status(200).json(await Traveller.create(req.body))
})

router.delete("/:id", async(req, res)=>{
    res.status(200).json(await Traveller.destroy({
        where: {
            id: req.params.id
        }
    }))
})

module.exports = router;