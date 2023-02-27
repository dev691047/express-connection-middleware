// middleware-- it a layer between request and response where we can give some conditions when a request is made so that we only get the response which
//  get satisfied by the condition written in the middle ware;
// we can also write the condition inside the function but middleware can be reused in many routes,  

const http=require('http');
const express=require('express');
const app=express();
const server=http.createServer(app);
app.use((req,res,next)=>{
    console.log("first middelwarer")
    next();
})
app.use((req,res,next)=>{
    console.log("second middleware");
    res.send('<h1>hello</h1>')
    
})
server.listen(3000);