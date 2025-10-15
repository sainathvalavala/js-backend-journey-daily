const express = require("express");
// import express from 'express'

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express JS");
});
app.get("/add/:n1/:n2", (req, res) => {
  res.send(+req.params.n1 + +req.params.n2);
});
app.get("/mul/:n1/:n2", (req, res) => {
  res.send(+req.params.n1 * +req.params.n2);
});
app.get("/sub/:n1/:n2", (req, res) => {
  res.send(+req.params.n1 - +req.params.n2);
});
app.get("/div/:n1/:n2", (req, res) => {
  res.send(+req.params.n1 / +req.params.n2);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
