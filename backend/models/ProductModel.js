const mongoose = require("mongoose");
const Review=require("./ReviewModel");
const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description:{type:String, required: true},
        Category:{type:String, required: true},
        count:{type:Number, required: true},
        price:{type:Number, required: true},
        rating:{type:Number, required: true},
        reviewsNumber:{type:Number, required: true},
        sales:{type:Number, default:0},
        attrs:[{key:{type:String},value:{type:String}}],
        images:[{url:{type:String,required:true}}],
        reviews:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:Review,
        }]
    },  
    {
        Timestamp: true,
    }
)
const Product = mongoose.model("Product", productSchema)

module.exports = Product;