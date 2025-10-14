var fs = require("fs");
console.log("first line");
fs.readFile("books.json", function (err, fdata) {
  console.log(err);
  // console.log(fdata.toString());
  console.log(fdata.length);
});

fs.readFile("students.txt", function (err, sdata) {
  console.log(err);
  console.log(sdata.toString());
});
console.log("last line");
