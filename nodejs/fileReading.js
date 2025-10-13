var fs=require("fs");//file system module
// console.log(fs);
var data= fs.readFileSync("students.txt");
console.log(data);
console.log(data.toString());
fs.writeFileSync("employees.txt","rahul revanth ashok")
fs.writeFileSync("people.txt","ashok shelby john")
// var n=fs.writeFileSync("employees.txt","rahul revanth")
// console.log(n.toString())--write files doesnot return anything