// global objects
// console.log()
// process
// __dirname,__filename
// Buffer// data in binary format(memory)
// setTimeout(),clearTimeout(),setInterval(),clearInterval()
// require , module.exports
// console
// setImmediate(), clearImmediate()

console.log(__dirname); //gives currentt directory
console.log(__filename); //gives current directory with filename
console.log(process);
console.log(process.cpuUsage());
console.log(process.memoryUsage());

console.log(process.argv);
console.log(process.argv0);
console.log(process.arch);
console.log(process.PORT_ID);
// console.log(process.argv1);

const buf=Buffer.from("hello");
console.log(buf);
