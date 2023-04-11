// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// questions for user input

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
        message: 'What are the contributing guidelines for your project?',
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
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
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
.then((data) => writeToFile(`sampleREADME.md`, data))

// function to write README file
function writeToFile(fileName, data) {

  const readmeOutline = generateMarkdown(data)

  fs.writeFile(fileName, readmeOutline, (err) =>
  err ? console.log(err) : console.log('Success!')
  );

}

