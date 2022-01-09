const User = require('./user')

class Maintenance extends User{

 EmployeeNo;
pendingJobs = [];

constructor(name, EmployeeNo){
    super(name);
    EmployeeNo;
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