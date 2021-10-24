//packages being used
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
//classes being used
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//team needs to be an array to pull from for the cards
const team = [];


// begins the process: starts the html document, and prompts user for first team member
function init() {
    startHtml();
    teamMemberList();
}

//writes the beginning of the HTML document
function startHtml() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- global bootstrap link -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <!-- global fontawesome link -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <!-- local css link -->
            <link rel="stylesheet" type="text/css" href="./style.css">
        <title>Document</title>
    </head>
    
    <body>
    
        <main class="container-fluid vh-auto">
            <!-- at the top of the page -->
            <header class="jumbotronHeader container-fluid text-center rounded">
                <h1>My Team</h1>
            </header>
            <section class="container-fluid d-flex flex-row flex-wrap justify-content-center align-content-center h-auto">
`;
    fs.writeFile('./dist/myteam.html', html, (err) => {
        err ? console.log(err) : console.log('html created')
    });
}


//prompt for adding team members
function teamMemberList() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Choose a teamate to add.',
            choices: ['manager', 'engineer', 'intern', 'done'],

        }
    ])
        .then((response) => {
            switch (response.role) {
                case ('manager'): manager()
                    break;
                case ('engineer'): engineer()
                    break;
                case ('intern'): intern()
                    break;
                case ('done'): finishTeamHtml()
                    break;
                default:
            }
        });
};

//prompts users for manager information, and then adds it to the created HTML as a dynamic card
function manager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the manager\'s name?',
        },
        {
            type: 'number',
            name: 'managerId',
            message: 'What is the manager\'s id number?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the manager\'s email address?',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the manager\'s office number?',
        },
    ])
        .then((response) => {
            const managerRole = 'Manager';
            let manager = new Manager(managerRole, response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            const html = `
            <div class="card text-center border-light m-2 shadow-lg rounded">
                <div class="card-header">
                    <h2 class="managerName">${response.managerName}</h2>
                    <h5 class="manager-card-title"><i class="fas fa-mug-hot"></i> Manager</h5>
                </div>
                <div class="card-body">
                    <ul class="managerInformation">
                        <li class="managerId" id="managerId">Id: ${response.managerId}</li>
                        <li class="managerEmail" id="managerEmail">Email: <a href="mailto: ${response.managerEmail}">${response.managerEmail}</a></li>
                        <li class="managerOfficeNumber" id="managerOfficeNumber">Office number: ${response.managerOfficeNumber}</li>
                    </ul>
                </div>
            </div>
            `;

            fs.appendFile('./dist/myteam.html', html, (err) => {
                err ? console.log(err) : console.log('html created')
            });
            team.push(manager);
            teamMemberList();
        });
};

//prompts users for engineer information, and then adds it to the created HTML as a dynamic card
function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'What is the engineer\'s id number?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer\'s GitHub username?',
        },
    ])
        .then((response) => {
            const engineerRole = 'Engineer';
            let engineer = new Engineer(engineerRole, response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            const html = `
            <div class="card text-center border-light m-2 shadow-lg rounded">
                <div class="card-header">
                    <h2 class="engineerName">${response.engineerName}</h2>
                    <h5 class="engineer-card-title"><i class="fas fa-glasses"></i> Engineer</h5>
                </div>
                <div class="card-body">
                    <ul class="engineerInformation">
                        <li class="engineerId" id="engineerId">Id: ${response.engineerId}</li>
                        <li class="engineerEmail" id="engineerEmail">Email: <a href="mailto: ${response.engineerEmail}">${response.engineerEmail}</a></li>
                        <li class="engineerGitHub" id="engineerGitHub">GitHub: <a href="https://github.com/${response.engineerGithub}" target="_blank">${response.engineerGithub}</a></li>
                    </ul>
                </div>
            </div>
            `;

            fs.appendFile('./dist/myteam.html', html, (err) => {
                err ? console.log(err) : console.log('html created')
            });
            team.push(engineer);
            teamMemberList();
        });
};

//prompts users for intern information, and then adds it to the created HTML as a dynamic card
function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'number',
            name: 'internId',
            message: 'What is the intern\'s id number?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school?',
        },
    ])
        .then((response) => {
            const internRole = 'Intern';
            let intern = new Intern(internRole, response.internName, response.internId, response.internEmail, response.internSchool);
            const html = `
            <div class="card text-center border-light m-2 shadow-lg rounded">
                <div class="card-header">
                    <h2 class="internName">${response.internName}</h2>
                    <h5 class="intern-card-title"><i class="fas fa-user-graduate"></i> Intern</h5>
                </div>
                <div class="card-body">
                    <ul class="internInformation">
                        <li class="internId" id="internId">Id: ${response.internId}</li>
                        <li class="internEmail" id="internEmail">Email: <a href="mailto: ${response.internEmail}">${response.internEmail}</a></li>
                        <li class="internSchool" id="internSchool">School: ${response.internSchool}</li>
                    </ul>
                </div>
            </div>
            `;

            fs.appendFile('./dist/myteam.html', html, (err) => {
                err ? console.log(err) : console.log('html created')
            });
            team.push(intern);
            teamMemberList();
        });
};


//adds the ending of the HTML
function finishTeamHtml() {
    const html = `
    </section>
    </main>
    <!-- local javascript link -->
    <script type="text/javascript" src="../index.js"></script>
</body>

</html>
    
    `;

    fs.appendFile('./dist/myteam.html', html, (err) => {
        err ? console.log(err) : console.log('html created')
    });
};

// initializes the process of creating an HTML document, and prompting user for team information
init()