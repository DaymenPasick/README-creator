
const fs = require('fs');
const inquirer = require('inquirer')

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
    
    const readME = `
# ${data.title}



## Description

-${data.description}


## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

-${data.installation}


## Usage

-${data.usage}

**Instructions for additional img/video content. If this doesn't apply, please delete this portion of your Usage section **

-If you have any additional images or videos to include, create an 'assets' folder in your directory,
and include your desired content in there.

-After creating your directory, insert the relative file path to your desired asset, and an alt text using the syntax below:

    
    ![alt text](assets/images/screenshot.png)



    

## Contribute

-If you want to contribute to my project, click the link below!

-[Project Page](${data.contribute}) 

## License

- <img src="https://img.shields.io/badge/License-${data.license}-blue" /> 

-${data.license}

## Tests

 

-${data.tests}


## Questions

-If you run into any issues or have any questions about my project, you can email me here: ${data.questions}



    `


    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }




    fs.writeFileSync('./output/newREADME.md', readME);
 });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
