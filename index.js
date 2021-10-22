//packages being used
const inquirer = require('inquirer');
const jest = require('jest');

//classes being used
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Employee');
const Intern = require('./lib/Employee');
const Manager = require('./lib/Employee');


function teamMemberList() {
    const manager = manager();
    const engineer = engineer();
    const employee = employee();
    const intern = intern();
    const done = finishTeam();
    
    
    .prompt([
        {
            type: 'list',
            name: 'username',
            message: 'What team member do you want to add?',
            choices: [manager, engineer, employee, intern, done]
        },
    ])

}

function manager()
    .prompt[
    questions
]

    .then(answers)

function employee
.prompt[
    questions
]

    .then(answers)

function engineer
.prompt[
    questions
]

    .then(answers)

function intern
.prompt[
    questions
]

    .then(answers)

function finishTeam
    writeFile("./dist/team.html");

