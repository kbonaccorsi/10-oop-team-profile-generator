//add validation to ensure that user input is in the proper format.

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getOfficeNumber() {
        console.log(`${this.officeNumber}`);
        return this.officeNumber;
    }
    getRole() {
        console.log(`Employee`);
        return `Employee`;
    }
    getRole() {
        console.log(`Manager`);
        return `Manager`;
    }
}

module.exports = Manager;