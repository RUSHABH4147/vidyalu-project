const express = require("express");
const signupModel = require("../model/signupModel");
const bcrypt =require('bcrypt')

const signup = express.Router();

signup.get("/", (req, res) => {
    res.send("hello");
  });

signup.post("/signup",async (req, res) => {
    const saltpassword = await bcrypt.genSalt(10)
    const securepassword =await bcrypt.hash(req.body.password, saltpassword)
  const postuser = new signupModel({
    "Name": req.body.Name,
    "Email": req.body.Email,
    "password": securepassword,
  });
  postuser.save()
    .then(() => {
      res.send(postuser);
    })
    .catch((err) => {
      console.log({ msg: err });
    });
});

module.exports = signup;
