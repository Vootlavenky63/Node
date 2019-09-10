const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("hi from express server back end")
})
app.listen(8080,()=>console.log("server is running on port 8080"))