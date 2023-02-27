const express=require("express");
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log("second middleware");
    res.send('<form action="/product" method="POST" ><input type="text" name:"title"/><button type="submit">save</button></form>')
    
})
router.post('/product',(req,res)=>{
   console.log(req.body)
    res.redirect('/');
    // res.send('<h3>hello</h3>')
})




module.exports=router;