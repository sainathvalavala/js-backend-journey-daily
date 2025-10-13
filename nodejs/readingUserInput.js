var inquirer=require("inquirer");
const { type } = require("os");
var prompt=inquirer.createPromptModule();
var questions=[
  {
    type:'input',
    name:'a',
    message:"enter the first number"
  },
  {
    type:'input',
    name:'b',
    message:"enter the second number"
  }
]
prompt(questions).then(({a,b})=>{
  console.log(+a+ +b)
})
