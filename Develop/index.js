// TODO: Include packages needed for this application
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
    choices: ['License1', 'License2', 'License3']
    },
    {
    type: 'input',
    message: 'What is your github URL',
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

.then ((response) => {
    const fileName = 'readme.me';
    const {name, description, installation, usage, contribution, features, test, license, linkedin, github, email} = data;

    const generateREADME = 

    `# ${name}

    LineLogic is a website that pulls data from the YouTube API and GitHub API using the Tailwind CSS framework. It is designed to be responsive, providing a seamless user experience on different devices.
    
    ## Description

    ${description}


    ## Table of Contents
    

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Features](#features)
    - [License](#license)

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ![Displays The Youtube Videos and Github Repository Desktop Responsive"LineLogic".](./assets/images/LineLogic.png)

    ## Questions

    Here's my github username: ${github}
    Here's my linkedin username: ${linkedin}
    Here's my email address: http://mailto:${email}

    ## License

    ${license}

    ## Features

    ${features}

    ## How to Contribute

    ${contribution}

    ## Tests

    ${test}

    `
}
);

function writeToFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}
// TODO: Create a function to initialize app
function init() {
    arrayOfQuestions()
}

function init() {
    const fs = require('fs');
    const inquirer = require('inquirer');

    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile("./samples/json/readme.json", JSON.stringify(answers))
        writeToFile("./samples/readme/readme.md", generateMarkdown(answers));
    }).catch();
}
// Function call to initialize app
init();

// http://github.com/adefuaad/
// http://linkdein.com/in/fuaad-shobambi/
// adesholafuaad@gmail.com
