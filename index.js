// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions for your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidlines for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GPLv2', 'Apache', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
        
])
.then((data) => writeToFile(`${data.title.toLowerCase().split(' ').join('')}.md`, data))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeOutline = `# ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## License

  This project is licensed under the ${data.license} license.

  ## Questions

  If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.username}.
  `;

  fs.writeFile(fileName, readmeOutline, (err) =>
  err ? console.log(err) : console.log('Success!')
  );

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
