const express = require("express");
const bodyParser=require("body-parser")
const app = express();
var db = require("./db/mongoose");
var Customer = require("./models/Customer");
app.get("/customer", (req, res) => {
  Customer.find({})
    .then(result => {
      return Customer.find({});
    })
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err));
});
// app.post('/customer',(req,res)=>{
//     res.send("successfully posted")
// })
app.use(bodyParser.json());
app.post("/customer", (req, res) => {
  var customer = new Customer(req.body);
  customer
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => console.log(err));
});
app.get("/customer/:id", (req, res) => {
    Customer.findOne({ _id: req.params.id })
  
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err))
  })
  app.patch("/customer/:id", (req, res) => {
    Customer.findOneAndUpdate({ _id: req.params.id }, req.body)
  
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err))
  })
  app.delete("/customer/:id", (req, res) => {
    Customer.findOneAndDelete({ _id: req.params.id })
  
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err))
  })

app.listen(8080, () => console.log("server is running on port 8080"));

// mongodb+srv://venkatesh:venkatesh@cluster0-bilop.mongodb.net/test?retryWrites=true&w=majority
