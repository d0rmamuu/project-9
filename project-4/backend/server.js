const express = require('express');
const mongoose = require('mongoose');
const signups= require('./routes/api/signups');
const xyz=require('./models/Signup');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//use routes
app.use('/api/signups',signups); 

//delete a user
app.delete('/delete/:id',(req,res)=>{
  xyz.findByIdAndDelete(req.params.id,function (err){
    if(err)
    console.log(err);
    else
    console.log("Deleted");
  })
})

//add a user
app.post('/signups',(req,res)=>{
  const signups=req.body
  xyz.create(signups,(err,data)=>{
    if(err){
      res.status(500).send(err)
    }
    else{
      res.status(201).send(data)
    }
  })
})



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
