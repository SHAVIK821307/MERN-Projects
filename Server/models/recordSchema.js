const mongoose=require("mongoose")


const recordSchema= new mongoose.Schema({
    Name:{
        type:String,
    },
    Amount:{
        type:Number,
    },
    Purpose:{
        type:String,
    },

})
module.exports=mongoose.model("Records",recordSchema)