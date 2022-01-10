const User = require('./user')
const Scooter = require('./scooter')

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
        //delete this.pendingJobs()
        //how do i delete the scooter id from the arrat   
    }
    scooter.id === 'Working'
}


}

module.exports = Maintenance;