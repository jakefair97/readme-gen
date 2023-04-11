// Returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-green.svg)]`
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `(https://opensource.org/licenses/${license})`
  }
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } else {
    return `## License

  This project is licensed under the ${license} license.`
  }
}

function licenseBookmark(license) {
  if (license === 'None') {
    return '';
  } else {
    return '- [License](#license)';
  }
}

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
 
  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${licenseBookmark(data.license)}
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Questions

  If you have any questions about the project, feel free to reach out to me at ${data.email}.

  You can find more of my work at https://github.com/${data.username}.
  `;


}

module.exports = generateMarkdown;
