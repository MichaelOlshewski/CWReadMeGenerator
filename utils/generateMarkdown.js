function generateMarkdown(answers) {
  return `
  # __*${answers.title}*__
  ## __Description__
  ${answers.description}
  ### __Installation__
  ${answers.installInstructions}
  ### __How To Use__
  ${answers.appUse}
  ### __License__
  ${answers.licensing}
  ### __How To Contribute__
  ${answers.contributions}
  ### __How To Run Tests__
  ${answers.tests}
  ### __Frequently Asked Questions__
  ${answers.questions}
  `
}

module.exports = generateMarkdown;
