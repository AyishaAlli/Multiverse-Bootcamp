const User = require('./user')

class Maintenance extends User{

 EmployeeNo;
pendingJobs;

constructor(name, EmployeeNo){
    super(name);
    EmployeeNo;
}
    
addJob(scooter){
    this.pendingJobs.push(scooter.id);
}

markJobComplete(scooter)


}