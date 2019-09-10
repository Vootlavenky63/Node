const mongoose=require("mongoose")
const Schema=mongoose.Schema
var CustomerSchema=new Schema({

    firstname:{
        type:String

    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    },
    address:{
        type:String
        
    },
    customer:{
        type:Boolean
    }
    
})

var Customer=mongoose.model("Customer",CustomerSchema)
module.exports=Customer
