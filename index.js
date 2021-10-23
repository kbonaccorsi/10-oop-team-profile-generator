//packages being used
const inquirer = require('inquirer');
const {} = require('fs');
//const jest = require('jest');

//classes being used
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//prompt for adding team members
// function teamMemberList() {
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'memberType',
//             message: 'Please build your team.',
//             choices: ["manager", "engineer", "employee", "intern", "done"],
//         }
//     ])
//         .then((response) => {
//             switch (response.memberType) {
//                 case ("manager"): manager()
//                     break;
//                 case ("engineer"): engineer()
//                     break;
//                 case ("employee"): employee()
//                     break;
//                 case ("intern"): intern()
//                     break;
//                 case ("done"): finishTeam()
//                     break;
//                 default:
//             }
//         });
// };

// USE new KEYWORD TO CREATE A NEW TEAM MEMBER WHEN NEEDED
function writeToFile(response) {
    let manager = new Manager(response);
    const attempt = ('./src/template.js');

    fs.writeFile(attempt, manager, (err) => {
        err ? console.log(err) : console.log("Success!")
    });
}

function manager() {
    
    
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?',
            //validate example: value => value < 18 ? `Nightclub is 18+ only` : true
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the manager\'s employee id number?',
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
        console.log(response);
        writeToFile(response);
    });
                //teamMemberList();
};

manager();
// function employee() {
//     inquirer.prompt([
//     type: 'list',
//     name: 'username',
//     message: 'What team member do you want to add?',
//     * `name`

//     * `id`

//     * `email`

//     * `getName()`

//     * `getId()`

//     * `getEmail()`

//     * `getRole()` & mdash; returns`'Employee'`
// ])

//     .then(answers)
//     teamMemberList();
// }

// function engineer() {
//     inquirer.prompt([
//     type: 'list',
//     name: 'username',
//     message: 'What team member do you want to add?',
//     `name`

//     * `id`

//     * `email`

//     * `getName()`

//     * `getId()`

//     * `getEmail()`

//     * `github` & mdash;GitHub username

//         * `getGithub()`

//         * `getRole()` & mdash; returns`'Employee'`

//             * `getRole()` & mdash;overridden to return `'Engineer'`
//     ])

//     .then(answers)
//     teamMemberList();
// }

// function intern() {
//     inquirer.prompt([
//     type: 'list',
//     name: 'username',
//     message: 'What team member do you want to add?',
//     `name`

//     * `id`

//     * `email`

//     * `getName()`

//     * `getId()`

//     * `getEmail()`

//     * `school`

//     * `getSchool()`

//     * `getRole()` & mdash; returns`'Employee'`

//         * `getRole()` & mdash;overridden to return `'Intern'`
//     ])

//     .then(answers)
//     teamMemberList();
// }

// function finishTeam() {
//     writeFile("./dist/team.html");
// }
