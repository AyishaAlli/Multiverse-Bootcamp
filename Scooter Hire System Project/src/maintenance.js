const User = require('./User')
const Scooter = require('./Scooter')

class Maintenance extends User{

employeeNo;
pendingJobs = [];

constructor(name, employeeNo){
    super(name);
    this.employeeNo = employeeNo;
}
    
addJob(scooter){
    this.pendingJobs.push(scooter.id);
}

markJobComplete(scooter){
    if (this.pendingJobs.includes(scooter.id)) {
        this.pendingJobs.pop(); // cant add another job without completing current job   
    }
    scooter.id === 'Working'
}


}

module.exports = Maintenance;