
const path= require("path")
console.log(path);
let filePath = "C:\\Users\\SaiNatg\\Downloads\\books.json";
let filePath2 = "users/saiNatg/downloads/books.json";
let filePath3 = '/home/user/documents/file.txt';
console.log(path.dirname(filePath));//C:\Users\SaiNatg\Downloads
console.log(path.dirname(filePath2));//users/saiNatg/downloads
console.log(path.dirname(filePath3));///home/user/documents
console.log(path.basename(filePath));//books.json
console.log(path.basename(filePath2));//books.json
console.log(path.basename(filePath3));//file.txt
console.log(path.extname(filePath));//.json
console.log(path.extname(filePath2));//.json
console.log(path.extname(filePath3));//.txt
//join 
const dir = '/home/user';
const file = 'documents/file.txt';
console.log(path.join(dir, file));
//resolve-/<current_working_directory>/givenpath
console.log(path.resolve(filePath2))
console.log(path.resolve(filePath3))
//parse-parsing a path into a object
console.log(path.parse(filePath))
console.log(path.parse(filePath2))
var pathObject=path.parse(filePath3)
console.log(pathObject)
//format-formtaing a path object into a string
console.log(path.format(pathObject))
var pathObject2={
  root: '',
  dir: 'users/saiNatg/downloads',
  base: 'books.json',
  ext: '.json',
  name: 'books'
}
console.log(path.format(pathObject2))
//path.sep
console.log(path.sep)
//image path
var p = "nodejs\readMulFiles\image.png";
console.log(path.resolve(p))

