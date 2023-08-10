// Import the 'inquirer' module for command-line prompts and user input gathering.
const inquirer = require('inquirer');

// Import the built-in 'fs' (File System) module to work with the file system (e.g., writing to a file).
const fs = require('fs');

// Import the built-in 'path' module to handle file and directory paths consistently across platforms.
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

// This function is responsible for taking the user's responses and formatting them into a structured README content.
function generateMarkdown(data) {
    // Return a template string that formats the provided data into the desired sections of a README.
    return `
# ${data.title}  // This sets the title of the project.

// Add a badge for the MIT license.
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
${data.description}  // This is the description section, populated by the user's input.

## Table of Contents
// List out the main sections of the README, providing links to jump directly to them.
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}  // This section is populated by the user's input on installation instructions.

## Usage
${data.usage}  // This section is populated by the user's input on how to use the project.

## License
// Specify the type of license (MIT in this case).
This project is licensed under the MIT license.

## Contributing
${data.contributing}  // This section is populated by the user's input on contribution guidelines.

## Tests
${data.tests}  // This section is populated by the user's input on test instructions.

## Questions
// Provide contact information: GitHub link (pre-filled) and user's email (from input).
For any questions, please contact me on [GitHub](https://www.github.com/softdevRaj) or email me at [${data.email}](mailto:${data.email}).
    `;
}

// This function is the main driver of the application.
function init() {
    // Use the inquirer module to prompt the user with the predefined set of questions.
    inquirer.prompt(questions)
    .then(answers => {
        // Once the user provides their answers, generate the README content.
        const readmeContent = generateMarkdown(answers);
        
        // Write the generated content to a 'README.md' file in the current directory.
        fs.writeFileSync(path.join(process.cwd(), 'README.md'), readmeContent);
        
        // Notify the user that the README has been successfully generated.
        console.log('README.md generated!');
    })
    .catch(error => {
        // If any errors are encountered during the process, display them in the console.
        console.error("Error encountered:", error);
    });
}

// Start the application by calling the main function.
init();
