// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      if(license === 'MIT') {
        return `<img src="https://img.shields.io/badge/License-${license}-blue" />`; 
    } else if (license === 'BSD'){
        return `<img src="https://img.shields.io/badge/License-${license}-blue" />`; 
    } else {
        return '';
    }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'MIT') {
        return "Click this link for more information about your license: " + `(https://opensource.org/licenses/${license})`; 
    } else if (license === 'BSD'){
        return "Click this link for more information about your license: " + `(https://opensource.org/licenses/${license})`; 
    } else {
        return '';
    }  

}


// TODO: Create a function to generate markdown for README
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



    `;


    

}

module.exports = generateMarkdown; 
