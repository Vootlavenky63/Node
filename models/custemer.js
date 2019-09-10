const mongoose=require("mongoose")
const schema=mongoose.schema
var CustomerSchema=new schema({

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
