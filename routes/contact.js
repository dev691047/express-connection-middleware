const express=require("express");
const router=express.Router();
const path=require('path');

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contactus.html'))
    
})

router.post('/contact-saved',(req,res)=>{
    console.log(req.body)
    res.send('saved');
})

module.exports=router;