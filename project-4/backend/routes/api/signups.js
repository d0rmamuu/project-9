const express = require('express');
const router = express.Router();

//Signup model

const Signup=require('../../models/Signup');

//@route GET api/Signup
//@desc Get All Commnets
//@access Public
router.get('/',(req,res) => {
    Signup.find()
    .then(comments => res.json(comments))
});

//@route POST api/Signup
//@desc create a post
router.post('/',(req,res) => {
   const newsignup=new Signup({
       user:req.body.user,
       pass:req.body.pass,
       email:req.body.email,
       phone:req.body.phone
   });
   newsignup.save().then(user =>res.json(user));

});

module.exports = router;