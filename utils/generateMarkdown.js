function generateMarkdown(answers) {
  return `
# __*${answers.title}*__ ![GitHub](https://img.shields.io/github/license/${answers.author}/${answers.repoName})

## __Description__
${answers.description}

<hr>

## __Installation__
${answers.installInstructions}

<hr>

## __How To Use__
${answers.appUse}

<hr>

### __License__ ${answers.licensing}

<hr>

### __How To Contribute__
${answers.contributions}

<hr>

### __How To Run Tests__
${answers.tests}

<hr>

### __Frequently Asked Questions__
${answers.questions}

<hr>

#### __Other Questions__
Find my other projects at https://github.com/${answers.author}/ <br>
For other questions, information on projects or if you want to collaborate on a project, please email me at ${answers.email}

###### This ReadMe was created with the Read Me Generator from https://github.com/MichaelOlshewski/CWReadMeGenerator
  `
}

module.exports = generateMarkdown;
