# 10-oop-team-profile-generator
Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

walkthrough video:
git hub repo:
sample HTML:


AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input

npm install inquirer
npm install jest
node index


WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    
    *function generatePrompts
    *.prompt [questions]
    *.then
    *writefile (.html)
        *create a card for each team member
        *append or push it into an object/array/string
        *use template literals


WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
    *email addresses need to be live links
    *link needs to open default email program
    *email address populates TO field
        *open email html

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
    *github username displays
    * username is linked to github profile (add _blank to force new tab)

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    *function init(){
    *const teamManagerQuestions[
        *Team manager's name
        *Team manager's employee ID
        *Team manager's email address
        *Team manager's office number
    ]
    }

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    *After all (teamManagerQuestions) have input
    make a separate function for (list:
            *add an engineer
            *add an intern
            *finish building my team)

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    *const engineerQuestions[
        *engineer's name
        *engineers id
        *engineers email
        *engineers GitHub username
    ]
    * After all (engineerQuestions) have input
    *.then (list:
            *add an engineer
            *add an intern
            *finish building my team)

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    *const internQuestions[
            *intern's name
            *interns id
            *interns email
            *interns GitHub username
        ]
        * After all (internQuestions) have input
        *.then (list:
                *add an engineer
                *add an intern
                *finish building my team)

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
    *Finish building my team
        *application exits
        *writeFile - HTML generated

*need an employee.js in a folder labeled lib
*export constructor function called employee
*add validation to ensure that user input is in the proper format.
    *.prompt can use validation (use a condition)
*production dependency on inquirer- [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user
*dev dependency on jest- [Jest](https://www.npmjs.com/package/jest) for running the unit tests


EXAMPLE:
![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-demo.png)


### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all four tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated HTML file that matches the user input.
