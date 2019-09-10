const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send({
        name:"venky",
        age:25,
        role:"fullStack Developer",
        developer:true

    })
})
app.listen(8080,()=>console.log("server is running on port 8080"))





// mongodb+srv://venkatesh:venkatesh@cluster0-bilop.mongodb.net/test?retryWrites=true&w=majority