//packages being used
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
//classes being used
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
// //final html being created
const attempt = ('./src/template.js');
//team needs to be an array to pull from for the cards
const team = [];


//prompt for adding team members
function teamMemberList() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'Choose a teamate to add.',
            choices: ["manager", "engineer", "employee", "intern", "done"],
        }
    ])
        .then((response) => {
            switch (response.memberType) {
                case ("manager"): manager()
                    break;
                case ("engineer"): engineer()
                    break;
                case ("employee"): employee()
                    break;
                case ("intern"): intern()
                    break;
                case ("done"): finishTeam()
                    break;
                default:
            }
        });
};

function writeToFile(response) {
    fs.writeFile(attempt, JSON.stringify(response, null, '\t'), (err) => {
        err ? console.log(err) : console.log("Success!")
    });
}

function appendFile(response) {
    fs.appendFile(attempt, JSON.stringify(response, null, '\t'), (err) => {
        err ? console.log(err) : console.log("Success!")
    });
}

function manager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the manager\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            //console.log(manager);
            team.push(manager);
            //console.log(team);
            appendFile(response);
            teamMemberList();
        });
};

function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the engineer\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            //console.log(engineer);
            team.push(engineer);
            //console.log(team);
            appendFile(response);
            teamMemberList();
        });
};

function employee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the employee\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const employee = new Employee(response.name, response.id, response.email);
            //console.log(employee);
            team.push(employee);
            //console.log(team);
            appendFile(response);
            teamMemberList();
        });
};
function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the intern\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const intern = new Intern(response.name, response.id, response.email, response.school);
            //console.log(intern);
            team.push(intern);
            //console.log(team);
            appendFile(response);
            teamMemberList();
        });
};

function finishTeam() {
    writeToFile(team);
    console.log(`Team has been created: ${team}`);
};

teamMemberList();