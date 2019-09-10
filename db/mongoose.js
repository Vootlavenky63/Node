const mongoose=require("mongoose")
mongoose.Promise=global.Promise
var db=mongoose.connect("mongodb+srv://venkatesh:venkatesh@cluster0-bilop.mongodb.net/test?retryWrites=true&w=majority")
module.exports=db
// mongoose connections