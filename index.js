require("dotenv").config();
const express = require("express");
const app = express();
const myport = process.env.PORT;

console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shariar", (req, res) => {
  res.send("<h1> This is Shariar </h1>");
});

app.listen(myport, () => {
  console.log(`Example app listening on port ${myport}`);
});
