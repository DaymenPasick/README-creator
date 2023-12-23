
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
