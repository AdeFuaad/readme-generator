// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license != 'None'
  ? `![License Badge](https://img.shields.io/badge/license-${license}-success)`
  : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license != 'None' ? `- [License](#license)` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license != 'None'
  ? `## License
    * This project is licensed under the terms of the ${license}.`
    : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    name,
    description,
    installation,
    usage,
    contribution,
    tests,
    features,
    license,
    github,
    linkedin,
    email,
  } = data;
  
  const badge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);
  
  return `
  # ${name} 
  ${badge}
    
  ## Description
  
  ${description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Test](#test)
  ${licenseLink}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Questions
  
  Here's my github username, feel free to contact me: (https://github.com/${github}/)
  Here's my linkedin username, feel free to contact me: (http://linkdein.com/in/${linkedin}/)
  Here's my email address, feel free to contact me: http://mailto:${email}
  
  ## License
  
  ${license}
  
  ## Features
  
  ${features}
  
  ${licenseSection}

  ## How to Contribute
  
  ${contribution}
  
  ## Tests
  
  ${tests} 
  `;
}

module.exports = generateMarkdown;

