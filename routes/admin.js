const express=require("express");
const router=express.Router();
const path=require('path');

router.get('/admin/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    
})

router.post('/admin/add-product',(req,res)=>{
   console.log(req.body)
    res.redirect('/');
})

module.exports=router;