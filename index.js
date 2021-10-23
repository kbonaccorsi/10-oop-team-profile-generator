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
            name: 'managerName',
            message: 'What is the manager\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'managerId',
            message: 'What is the manager\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the manager\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the manager\'s office number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
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
            name: 'engineerName',
            message: 'What is the engineer\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'What is the engineer\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer\'s GitHub username?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
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
            name: 'employeeName',
            message: 'What is the employee\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'employeeId',
            message: 'What is the employee\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is the employee\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const employee = new Employee(response.employeeName, response.employeeId, response.employeeEmail);
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
            name: 'InternName',
            message: 'What is the intern\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'InternId',
            message: 'What is the intern\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'InternEmail',
            message: 'What is the intern\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'InternSchool',
            message: 'What is the intern\'s school?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
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