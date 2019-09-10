const express=require("express")
const app=express()
var db=require('./db/mongoose')
var Customer=require('./models/Customer')
app.get("/customer", (req, res) => {
    Customer.find({})
      .then(result => {
        return Customer.find({})
      })
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err))
  })


  
    

app.listen(8080,()=>console.log("server is running on port 8080"))





// mongodb+srv://venkatesh:venkatesh@cluster0-bilop.mongodb.net/test?retryWrites=true&w=majority