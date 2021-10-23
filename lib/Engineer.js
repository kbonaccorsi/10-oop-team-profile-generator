//add validation to ensure that user input is in the proper format.

class Engineer {
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }
    getName() {
        console.log(`${this.name}`);
        return this.name;
    }
    getId() {
        console.log(`${this.id}`);
        return this.id;
    }
    getEmail() {
        console.log(`${this.email}`);
        return this.email;
    }
    getGitHub() {
        console.log(`${this.gitHub}`);
        return this.gitHub;
    }
    getRole() {
        console.log(`Engineer`);
        return `Engineer`;
    }
}

module.exports = Engineer;