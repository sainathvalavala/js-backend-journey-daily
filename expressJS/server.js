const express = require("express");
const app = express();
// console.log(app)
app.get("/", function(req,res){
  // console.log(req);
  console.log(res);
  res.send("server created")
})

app.listen(443,function(){
   console.log("Application is running on portNo:443")
})