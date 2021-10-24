//packages being used
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
// template being used to populate a dynamic html document
const generateHtmlTemplate = require(`./src/generateHtmlTemplate.js`);
//classes being used
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
//team needs to be an array to pull from for the cards
const team = [];

// begins the process: starts the html document, and prompts user for first team member
function init() {
    startHtml();
    teamMemberList();
}


//prompt for adding team members
function teamMemberList() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Choose a teamate to add.',
            choices: ['manager', 'engineer', 'employee', 'intern', 'done'],
            
        }
    ])
        .then((response) => {
            switch (response.role) {
                case ('manager'): manager()
                    break;
                case ('engineer'): engineer()
                    break;
                case ('employee'): employee()
                    break;
                case ('intern'): intern()
                    break;
                case ('done'): finishTeamHtml()
                    break;
                default:
            }

        });
};

function addHtml() {
    //use template to html with user input going to the correct locations
    //let format = generateHtmlTemplate(response);
    //final html being created
    const fileName = ('./dist/look.html');
    fs.appendFile(fileName, JSON.stringify(team, null, '\t'), (err) => {
        err ? console.log(err) : console.log('Success!')
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
            const managerRole = 'Manager';
            let manager = new Manager(managerRole, response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            //console.log(manager);
            team.push(manager);
            //console.log(team);
            //addHtml();
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
            const engineerRole = 'Engineer';
            let engineer = new Engineer(engineerRole, response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            //console.log(engineer);
            team.push(engineer);
            //console.log(team);
            //addHtml();
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
            const employeeRole = "Employee";
            let employee = new Employee(employeeRole, response.employeeName, response.employeeId, response.employeeEmail);
            //console.log(employee);
            team.push(employee);
            //console.log(team);
            //addHtml();
            teamMemberList();
        });
};

function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'internId',
            message: 'What is the intern\'s id number?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email address?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
    ])
        .then((response) => {
            //console.log(response);
            const internRole = 'Intern';
            let intern = new Intern(internRole, response.internName, response.internId, response.internEmail, response.internSchool);
            //console.log(intern);
            team.push(intern);
            //console.log(team);
            //addHtml();
            teamMemberList();
        });
};

function finishTeamHtml() {
    console.log(team);
    addHtml();
    console.log(`Team has been created: ${JSON.stringify(team)}`);
};

teamMemberList();