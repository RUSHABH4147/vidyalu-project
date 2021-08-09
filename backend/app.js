const express = require("express");
const mongoose = require("mongoose");
const signup =require('./routes/signup')
const app = express();
const cors = require('cors')
// app.use(bodyparser.json())
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
  res.send("hello");
});
app.use('/vidyalu',signup)

mongoose
  .connect(
    "mongodb+srv://vidyalu:4kJHdE2EYJF0SfCP@cluster0.7trhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.listen(4000, () => {
  console.log("connected to server");
});
