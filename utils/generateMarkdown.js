const fs = require('fs')
const process = require('process')

// function to generate markdown for README
function generateMarkdown(fileName, data) {
  return `
    # ${data.title}
    ## ${data.description}
  `;
}

module.exports = generateMarkdown;


// fs.writeFile(process.cwd() + "/generatedReadme/" + fileName, JSON.stringify(data, null, '\t'), function(err) {
//   if (err) {
//       return console.log(err)
//   }
//   generateMarkdown(data)
//   console.log("Success")
// })