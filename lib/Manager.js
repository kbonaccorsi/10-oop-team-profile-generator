//add validation to ensure that user input is in the proper format.

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName(name) {
        console.log(`${this.name}`);
        return this.name;
    }
    getId(id) {
        console.log(`ID: ${this.id}`);
        return this.id;
    }
    getEmail(email) {
        console.log(`Email: ${this.email}`);
        return this.email;
    }
    getOfficeNumber(officeNumber) {
        console.log(`Office number: ${this.officeNumber}`);
        return this.officeNumber;
    }
    getRole() {
        console.log(`Manager`);
        return `Manager`;
    }
}

module.exports = Manager;