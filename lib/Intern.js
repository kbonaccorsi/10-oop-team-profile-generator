//add validation to ensure that user input is in the proper format.

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        console.log(`${this.school}`);
        return this.school;
    }
    getRole() {
        console.log(`Intern`);
        return `Intern`;
    }
};

module.exports = Intern;