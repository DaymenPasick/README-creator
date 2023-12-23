
const fs = require('fs');
const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

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
    
    const readME = `
# Title

## Description


## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation



## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits



## License



## Tests
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
