//add validation to ensure that user input is in the proper format.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(role, name, id, email, officeNumber) {
        super(role, name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(officeNumber) {
        return this.officeNumber;
    }
}

module.exports = Manager;