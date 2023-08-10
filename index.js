// Importing required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// List of questions to prompt the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// Function to generate the README content based on user responses
function generateMarkdown(data) {
    return `
# ${data.title}

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the MIT license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me on [GitHub](https://www.github.com/softdevRaj) or email me at [${data.email}](mailto:${data.email}).
    `;
}

// Main function to initialize the application
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        // Generate README content and write it to a file
        const readmeContent = generateMarkdown(answers);
        fs.writeFileSync(path.join(process.cwd(), 'README.md'), readmeContent);
        console.log('README.md generated!');
    })
    .catch(error => {
        console.error("Error encountered:", error);
    });
}

// Invoke the main function to start the application
init();
