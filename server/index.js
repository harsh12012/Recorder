const express = require("express");
const mongoos = require("mongoose");
const cors = require("cors");
const employeesModel = require("./models/employees");
const jwt = require("jsonwebtoken");
const SecretKey = "SecretKey";

const app = express();
app.use(express.json());
app.use(cors());

mongoos.connect("mongodb://127.0.0.1:27017/employees");
app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  employeesModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("No record is exist");
    }
  });
  // jwt.sign({ user }, SecretKey, { expiresIn: "300s" }, (err, token) => {
  //   res.json({
  //     token,
  //   });
  // });
});
app.post("/register", (req, res) => {
  employeesModel
    .create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
