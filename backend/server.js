const express = require('express');
const app= express();
const apiRoute=require("./routes/apiRoutes");
const port=5000


app.use('/api',apiRoute);
app.get('/',async(req,res)=>{
    res.json({"message":"API running"});
})


//MongoDb connection 
const DBconnection=require("./config/db");
const Product = require('./models/ProductModel');
DBconnection();


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})