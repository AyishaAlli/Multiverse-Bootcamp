const User = require('../src/User')
const Scooter = require('../src/scooter')

class Admin extends User {

    EmployeeNo;
    Reported = [];

    constructor(name, employeeNo) {
        super(name);
        this.EmployeeNo = employeeNo
    }

    markIssue(scooter) {
        if (scooter.condition === 'Working') {
            scooter.condition = 'Broken'
            this.Reported.push(scooter.Id)
        } else { 
            return 'Already marked as broken' 
        }
    } 
}
module.exports = Admin

// const julie = new Admin('Julie', 342152)
// const scooterOne = new Scooter('1111', 200, 'Working')
// const scooterTwo = new Scooter('2222', 200, 'Broken')
//julie.markIssue(scooterOne)
//console.log(scooterOne)