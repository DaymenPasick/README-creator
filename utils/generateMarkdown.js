//This button will take in user's license choice and use it to either generate a badge, or return an empty string
function renderLicenseBadge(license) {
      if(license === 'MIT') {
        return `<img src="https://img.shields.io/badge/License-${license}-blue" />`; 
    } else if (license === 'BSD'){
        return `<img src="https://img.shields.io/badge/License-${license}-blue" />`; 
    } else {
        return '';
    }  
}

//This button will take in user's license choice and use it to either generate information on that license, or return an empty string
function renderLicenseLink(license) {
    if(license === 'MIT') {
        return "Click this link for more information about your license: " + `(https://opensource.org/licenses/${license})`; 
    } else if (license === 'BSD'){
        return "Click this link for more information about your license: " + `(https://opensource.org/licenses/${license})`; 
    } else {
        return '';
    }  

}


//this function contains the template for our newREADME, and will user the user's prompt answers(data)
//to fill in the designated spaces
function generateMarkdown(data) {

return `
# ${data.title}

- ${renderLicenseBadge(data.license)}

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

- ${renderLicenseBadge(data.license)}

- ${renderLicenseLink(data.license)}


## Tests

  
-${data.tests}


## Questions

-If you run into any issues or have any questions about my project, you can email me here: ${data.email}

-If you want to checkout more of my projects, or contact me through GitHub, click here:(https://github.com/${data.gitusername}) 



    `;


    

}

//this will allow us to user content written within generateMarkdown.js outside of the file
module.exports = generateMarkdown; 
