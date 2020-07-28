const inquirer = require('inquirer')
const fs = require('fs');
const process = require("process");
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user

const questionsArr = [
    "Application Name", // 0
    "Application Author", // 1
    "Application Description", // 2  
    "Application License", // 3
    "Installation Instructions", // 4
    "Repository Name", // 5
    "How To Use", // 6
    "How do people contribute to this project?", // 7
    "Please enter the name(s) of any contributors", //8
    "If there are any tests, please explain what test and how to test", // 9
    "Please enter any frequently asked quesions", // 10
];

// function to initialize program
function question() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questionsArr[0]
        },
        {
            type: "input",
            name: "author",
            message: questionsArr[1]
        },
        {
            type: "input",
            name: "description",
            message: questionsArr[2]
        },
        {
            type: "list",
            name: "licensing",
            message: questionsArr[3],
            choices: [
                "MIT",
                "Apache",
                "GPL",
                "Open Software License"
            ]
        },
        {
            type: "input",
            name: "installInstructions",
            message: questionsArr[4]
        },
        {
            type: "input",
            name: "repoName",
            message: questionsArr[5]
        },
        {
            type: "input",
            name: "appUse",
            message: questionsArr[6]
        },
        {
            type: "input",
            name: "contributions",
            message: questionsArr[7]
        },
        {
            type: "input",
            name: "contributors",
            message: questionsArr[8]
        },
        {
            type: "input",
            name: "tests",
            message: questionsArr[9]
        },
        {
            type: "input",
            name: "questions",
            message: questionsArr[10]
        }
    ])
};

question()
    .then(function(answers) {
        const readme = generateMarkdown(answers)
        return writeFileAsync(process.cwd() + '/generatedReadme/README.md', readme)
    })
    .then(function() {
        console.log("Success")
    })
    .catch(function (err) {
        console.log(err)
    });



// // function call to initialize program
// question();
