// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()
// TODO: Create an array of questions for user input
const questions = [];
prompt([
    {
        type: 'input',
        message: 'testing input',
        name: 'nameTest',
        default: 'Brooksy'
    }



])
 .then((data) =>{
    console.log(data);

 })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
