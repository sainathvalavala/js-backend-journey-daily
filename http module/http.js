const http = require("http");
// console.log(http);
const server=http.createServer(function(req,res){
  console.log("request came",req.url)
  var r=req.url.split("/");
  console.log(r);
  if(r[1]=='add'){
    var k=(+r[2]+ +r[3]);
    res.end(""+k);
  }
  if (r[1]=='mul'){
    var k= (+r[2]* +r[3])
    res.end(""+k);
  }
  // res.end(`hello there ${req.url} how are you`)
  
})
server.listen(3100,function(){
  console.log("server running on 3100")
})