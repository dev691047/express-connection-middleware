// middleware-- it a layer between request and response where we can give some conditions when a request is made so that we only get the response which
//  get satisfied by the condition written in the middle ware;
// we can also write the condition inside the function but middleware can be reused in many routes,  


const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const adminRouter=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRouter);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h1>page not found</h1>")
})


app.listen(3000);