const inquirer = require("inquirer");

// Import the built-in 'fs' (File System) module to work with the file system (e.g., writing to a file).
const fs = require("fs");

// Import the built-in 'path' module to handle file and directory paths consistently across platforms.
const path = require("path");

// List of questions to prompt the user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// This function is responsible for taking the user's responses and formatting them into a structured README content.
function generateMarkdown(data) {
  // Use a template string to format the provided data into the desired sections of a README.

  // Set the title of the project.
  let output = `# ${data.title}\n\n`;

  // Add a badge for the MIT license.
  output += `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)\n\n`;

  // The description section, populated by the user's input.
  output += `## Description\n${data.description}\n\n`;

  // List out the main sections of the README, providing links to jump directly to them.
  output += `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)\n\n`;

  // Populate the installation instructions with the user's input.
  output += `## Installation\n${data.installation}\n\n`;

  // Populate the usage information with the user's input.
  output += `## Usage\n${data.usage}\n\n`;

  // Specify the type of license (MIT in this case).
  output += `## License\nThis project is licensed under the MIT license.\n\n`;

  // Populate the contribution guidelines with the user's input.
  output += `## Contributing\n${data.contributing}\n\n`;

  // Populate the test instructions with the user's input.
  output += `## Tests\n${data.tests}\n\n`;

  // Provide contact information: GitHub link (pre-filled) and user's email (from input).
  output += `## Questions\nFor any questions, please contact me on [GitHub](https://www.github.com/softdevRaj) or email me at [${data.email}](mailto:${data.email}).\n`;

  return output;
}

// This function is the main driver of the application.
function init() {
  // Use the inquirer module to prompt the user with the predefined set of questions.
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Once the user provides their answers, generate the README content.
      const readmeContent = generateMarkdown(answers);

      // Write the generated content to a 'README.md' file in the current directory.
      fs.writeFileSync(path.join(process.cwd(), "README.md"), readmeContent);

      // Notify the user that the README has been successfully generated.
      console.log("README.md generated!");
    })
    .catch((error) => {
      // If any errors are encountered during the process, display them in the console.
      console.error("Error encountered:", error);
    });
}

// Start the application by calling the main function.
init();
