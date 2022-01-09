const User = require('../src/User')
const Scooter = require('../src/scooter')

class Admin extends User {

    EmployeeNo;

    constructor(name, EmployeeNo) {
        super(name);
        this.EmployeeNo = EmployeeNo
    }

    MarkIssue(scooter) {
        if (scooter.condition === 'Working') {
            scooter.condition = 'Broken'
        } else { 
            return 'Already marked as broken' 
        }
    } 
}
module.exports = Admin

const julie = new Admin('Julie', 342152)
const scooterOne = new Scooter('1111', 200, 'Working')
const scooterTwo = new Scooter('2222', 200, 'Broken')
//julie.MarkIssue(scooterOne)
console.log(scooterOne)