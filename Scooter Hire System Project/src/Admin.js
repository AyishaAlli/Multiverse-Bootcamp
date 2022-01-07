const User = require('./User')

class Admin extends User {

    EmployeeNo;

    constructor(name, EmployeeNo){
     super(name);
     this.EmployeeNo = EmployeeNo
    }
} 
module.exports = Admin