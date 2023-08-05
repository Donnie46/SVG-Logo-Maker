const inquirer = require('inquirer');
const fs = require('fs');

const Circle = require('./lib/circle')
const Triangle = require('./lib/triangle')
const Square = require('./lib/square')

const questions = [
    {
        type: 'list',
        message: 'What is the shape?',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        message: 'What is the color of the shape?',
        name: 'shapeColor',
    },
    {
        type: 'input',
        message: 'What is the color of the text',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'What is the text?',
        name: 'text',
    }
]

function init() {
    inquirer.prompt(questions)
        .then(response => {
            if (response.shape === 'circle') {
                const shape = new Circle(response.shapeColor, response.textColor, response.text)
                fs.promises.writeFile('dist/shape.svg', shape.render())
            } else if (response.shape === 'triangle') {
                const shape = new Triangle(response.shapeColor, response.textColor, response.text)
                fs.promises.writeFile('dist/shape.svg', shape.render())
            } else if (response.shape === 'square') {
                const shape = new Square(response.shapeColor, response.textColor, response.text)
                fs.promises.writeFile('dist/shape.svg', shape.render())
            }
        })
}



init()



