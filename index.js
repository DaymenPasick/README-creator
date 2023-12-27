
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const prompt = inquirer.createPromptModule()

prompt([
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
        choices: [
            'MIT',
            'GNU',
            'N/A' 
        ]
        
    },
    {
        //for questions
        type: 'input',
        message: 'Please enter an email that others may use if they have any questions about your project',
        name: 'questions',
        default: 'N/A'
        
    }



])
 .then((data) =>{
    console.log(data);
    
  writeToFile("newREADME.md", data)

 });


 function writeToFile(fileName, data){

    const genMD = generateMarkdown(data);

    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }

    fs.writeFileSync('./output/newREADME.md', genMD, err => {
        if(err){
            console.error(err);
        }
    });

}






// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
