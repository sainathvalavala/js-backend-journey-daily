var fs=require("fs");
var data= fs.readFileSync("students.txt");
// console.log(data);
console.log(data.toString());
fs.writeFileSync("employees.txt","rahul revanth")
// var n=fs.writeFileSync("employees.txt","rahul revanth")
// console.log(n.toString())--write files doesnot return anything