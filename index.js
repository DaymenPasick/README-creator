
//this grouping of code is required to utilize file dependencies
//as well as the code in the generateMarkdown.ks file
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//utalizes inquirer dependency's createPromptModule function
const prompt = inquirer.createPromptModule()

const questions = [
    {
        //for title
        type: 'input',
        message: 'Please type your desired project title',
        name: 'title',
        default: 'N/A'
    },
    {
        //for description
        type: 'input',
        message: 'Please enter a description for your project',
        name: 'description',
        default: 'N/A'
    },
    {
        //for installation
        type: 'input',
        message: 'Please list any steps required to install your project',
        name: 'installation',
        default: 'N/A'
    },
    {
        //for usage
        type: 'input',
        message: 'Please note any instructions for using your product/app',
        name: 'usage',
        default: 'N/A'
    },
    {
        //for contributing
        type: 'input',
        message: 'Please provide a direct link to you project, so others can contribute',
        name: 'contribute',
        default: 'N/A'
    },
    {
        //for tests
        type: 'input',
        message: 'If there were any testing steps/notes you wanted to include, please list them here',
        name: 'tests',
        default: 'N/A,'
    },
    {
        //for license
        type: 'rawlist',
        message: 'Please choose your desired project license',
        name: 'license',
        default: 'N/A',
        choices: [
            'MIT',
            'BSD',
            'N/A' 
        ]
        
    },
    {
        //for questions
        type: 'input',
        message: 'Please enter an email that others may use if they have any questions about your project',
        name: 'email',
        default: 'N/A'
        
    },
    {
        //also for questions
        type: 'input',
        message: 'Please enter your GitHub username so others can see your projects',
        name: 'gitusername',
        default: 'N/A'
        
    }
];
 

 //function willtake in prompt answers(data), and use them to create a new README named 'fileName'
 function writeToFile(fileName, data){

    //set imported generateMarkdown() from generateMarkdown.js to a const and passed it
    //our prompt answer data
    const genMD = generateMarkdown(data);
    
    //will make a new directory named "output", if one doesn't already exist
    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }

    //will show take in genMD(data) function and write it as a file named 'newREADME.md' in the output directory
    //or throw an error
    fs.writeFileSync('./output/newREADME.md', genMD, err => {
        if(err){
            console.error(err);
        }
    });

}


// this function will initialize the app upon call
const init = () => {
    prompt(questions)
     .then(data => {
        console.log(data)
        writeToFile("newREADME.md", data)
     })

}

init();
