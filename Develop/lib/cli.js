const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const fs = require('fs')

class CLI {
  run() {

    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for logo. (Must not be more than 3 characters.)?',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color ',
      },
      {
        type: 'list',
        name: 'shapeType',
        message: 'Select a shape for logo (Use arrow key)',
        choices: ['Circle','Triangle','Square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color ',
      },
    ])
    .then(answers => {
      let shape;
      if (answers.shapeType === "Circle") {
        shape = new Circle()
      } else if (answers.shapeType === "Triangle") {
        shape = new Triangle()
      } else if (answers.shapeType === "Square") {
        shape = new Square()
      }
      shape.setColor(answers.shapeColor)
      const svg = new SVG(answers.text,answers.textColor,shape.render())
      fs.writeFile('./logo.svg', svg.rendSVG(), (err) =>
      err ? console.log(err) : console.log('Success') )
    })
    // TODO: Create a shape object based on inquirer data
    
    // TODO: Create a svg object and set text and textColor using user Data
    
    // TODO: Set svg shape with shape object created above
    
    // TODO: Write your svg file
    
  }
}
// const init = async () => {
//   try {
//     const shape = await inquirer.prompt();


//   } catch (err) {
//     console.log(err);
//   }
// } 
// init();

module.exports = CLI;
