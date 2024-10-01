

require("dotenv").config();
const mongoose= require("mongoose");
const connectDB=async()=>{
    console.log("MongoDB connection string",process.env.MONGO_URI)  
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection success")
    }catch(error)
    {
        console.log("MongoDB connection fail")  
        // ExplainVerbosity(1) ;     
    }
}
module.exports=connectDB;