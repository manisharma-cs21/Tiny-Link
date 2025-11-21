const express =require('express')
const router =express.Router();
const Link =require("../models/Link");

router.post("/links",async (req,res)=>{
    try{
        const {url,code}=req.body;

        if(!url ||!code)
            return res.status(400).json({error:"url and code required"});

        if(!/^[A-Za-z0-9]{6,10}$/.test(code))
            return res.status(400).json({error:"Invalid code format"})
        const exists=await Link.findOne({code})
        if(exists) return res.status(409).json({ error: "Code already exists" });

        const link =await Link.create({url,code})
        //res.status(201).json(link);
        res.redirect("/")

    }
catch(err){
     res.status(500).json({ error: "Server error" });
}
});


router.get("/links",async (req,res)=>{
    const links = await Link.find().sort({ createdAt: -1 });
    res.json(links);

})
router.get("/links/:code",async (req,res)=>{
     const link = await Link.findOne({ code: req.params.code });
     if (!link) return res.status(404).json({ error: "Not found" });
  res.json(link);

})
router.delete("/links/:code",async (req,res)=>{
    const del = await Link.findOneAndDelete({ code: req.params.code });
    if (!del) return res.status(404).json({ error: "Not found" });
    res.redirect("/");


})
module.exports=router;
