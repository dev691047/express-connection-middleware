const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>hello home</h1>')   
})


module.exports=router;