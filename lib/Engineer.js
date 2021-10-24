//add validation to ensure that user input is in the proper format.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(role, name, id, email, gitHub) {
        super(role, name, id, email)
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;