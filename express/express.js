/*expressJS-   connecting backend to browser
- a nodeJS framework to create WebAppn and also provides the server to run that Application.
-creates a server and receives requests from browser URL and responds back with related data.*/

/*server
- a computer/system that handles requests and serves responses
- a platform that u can run the code(Web Appn)
*/

//application- A full program with logic/code that performs tasks
//webAppn- retrieving data from database or adding data into database(data base integration)

//website- static webPage


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
