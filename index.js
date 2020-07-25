const inquirer = require('inquirer')
const fs = require('fs');
const process = require("process");
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    "What is the title of the application?", // Question 1
    "Enter a description for your application.", // Question 2
    "Would you like to add a table of contents?", // Question 3
    "How do you install your application? Please enter instructions here!", // Question 4
    "How would you use this application?", // Question 5
    "What license are you publishing your application with?", // Question 6
    "Please enter your information about contributions towards your application.", // Question 7
    "Please enter information about running tests on your application.", // Question 8
    "Please enter any frequently asked quesions" // Question 9
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(process.cwd() + '/generatedReadme/' + fileName + '.md', JSON.stringify(data, null, '\n'), function(err) {
        if (err) {
          return console.log(err) 
        }
        generateMarkdown(data)
        console.log("Success!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]
        },
        {
            type: "checkbox",
            name: "tableOfContents",
            message: questions[2],
            choices: [
                "Yes",
                "No"
            ]
        },
        {
            type: "input",
            name: "installInstructions",
            message: questions[3]
        },
        {
            type: "input",
            name: "appUse",
            message: questions[4]
        },
        {
            type: "input",
            name: "licensing",
            message: questions[5]
        },
        {
            type: "input",
            name: "contributions",
            message: questions[6]
        },
        {
            type: "input",
            name: "tests",
            message: questions[7]
        },
        {
            type: "input",
            name: "questions",
            message: questions[8]
        }
    ]).then(function(data) {
        var fileName = "README"
        writeToFile(fileName, data)
    })
}

// function call to initialize program
init();
