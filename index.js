// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()
// TODO: Create an array of questions for user input
const questions = [];

prompt([
    {
        //for title
        type: 'input',
        message: 'Please type your desired project title',
        name: 'title',
        default: 'READMEtitle'
    },
    {
        //for description
        type: 'input',
        message: 'testing input',
        name: 'description',
        default: 'READMEdescription'
    },
    {
        //for table of contents
        type: 'input',
        message: 'testing input',
        name: 'contents',
        default: 'READMEcontents'
    },
    {
        //for installation
        type: 'input',
        message: 'testing input',
        name: 'installation',
        default: 'READMEinstallation'
    },
    {
        //for usage
        type: 'input',
        message: 'testing input',
        name: 'usage',
        default: 'READMEusage'
    },
    {
        //for contributing
        type: 'input',
        message: 'testing input',
        name: 'contribute',
        default: 'READMEcontribute'
    },
    {
        //for tests
        type: 'input',
        message: 'testing input',
        name: 'tests',
        default: 'READMEtests'
    },
    {
        //for questions
        type: 'input',
        message: 'testing input',
        name: 'questions',
        default: 'READMEquestions'
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
