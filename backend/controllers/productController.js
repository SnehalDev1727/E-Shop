const Product=require("../models/ProductModel");

//Get Products
const getProducts=(req,res)=>{
    Product.create({"name":"panasonic"})
    res.send("Handling product routes");
}

module.exports=getProducts;