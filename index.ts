#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { messege: "Enter Your First Number", type: "number", name: "FirstNumber" },
  { messege: "Enter Your Second Number", type: "number", name: "SecondNumber" },
  {
    messege: 'Select one of the operators to perform operation',
    type: 'list',
    name: 'operator',
    choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
  },
]);
// conditional statement 
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber)
} else{
    console.log("Please select valid operator")
}