
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
        message: 'Please enter a description for your project',
        name: 'description',
        default: 'READMEdescription'
    },
    {
        //for installation
        type: 'input',
        message: 'Please list any steps required to install your project',
        name: 'installation',
        default: 'READMEinstallation'
    },
    {
        //for usage
        type: 'input',
        message: 'Please note any instructions for using your product/app',
        name: 'usage',
        default: 'READMEusage'
    },
    {
        //for contributing
        type: 'input',
        message: 'Please provide a direct link to you project, so others people can contribute',
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
# ${data.title}



## ${data.description}


## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

-${data.installation}


## Usage


-If you have any additional images or videos to include, create an 'assets/images OR assets/videos' folder in your directory,
and include your desired content in there.

-After this step, insert the relative file path and alt text using the syntax below:

    
    ![alt text](assets/images/screenshot.png)
    

## Contribute

-If you want to contribute to my project, click the link below!
-[Project Page](${data.contribute}) 

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
