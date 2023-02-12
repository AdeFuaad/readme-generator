// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = 
inquirer
.prompt([
    {
    type: 'input',
    message: 'What is your project title name?',
    name: 'name',
    },
    {
    type: 'input',
    message: 'What is the description of your project',
    name: 'description',
    },
    {
    type: 'input',
    message: 'What is the installation instructions for your project',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'What is the usage information of your project',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'What is the contribution guidelines to your project',
    name: 'contribution',
    },
    {
    type: 'input',
    message: 'What is the test instructions for your project',
    name: 'test',
    },
    {
    type: 'input',
    message: 'What are the features of your project',
    name: 'features',
    },
    {
    type: 'list',
    message: 'Select your license from the list?',
    name: 'license',
    choices: ['No license', 'Apache License 2.0', 'MIT License', 'GNU General Public License v3.0', 
    "BSD 2-Clause 'Simplified' License", 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense',
    'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0']
    },
    {
    type: 'input',
    message: 'What is your github username',
    name: 'github',
    },
    {
    type: 'input',
    message: 'What is your linkedin URL',
    name: 'linkedin',
    },
    {
    type: 'input',
    message: 'What is your email address',
    name: 'email',
    },
])
// emptyInput ()

// .then ((response) => {
//     const fileName = 'readme.me';
//     const {name, description, installation, usage, contribution, features, test, license, linkedin, github, email} = data;
// }
// );

function writeToFile(fileName, data) {
    let rmMarkDown = generateMarkdown(data);
    fs.appendFile(fileName, rmMarkDown, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('userReadMe.md', response);
    }).catch();
}
// Function call to initialize app
init();

// http://github.com/adefuaad/
// http://linkdein.com/in/fuaad-shobambi/
// adesholafuaad@gmail.com






