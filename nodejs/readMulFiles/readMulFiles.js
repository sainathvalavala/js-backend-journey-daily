var fs= require("fs");
console.log("first line")
fs.readFile("books.json", function(err,fdata){
  console.log(err)
  console.log(fdata)
})

fs.readFile("student.txt", function(err,sdata){
  console.log(err)
  console.log(sdata)
})
console.log("last line");