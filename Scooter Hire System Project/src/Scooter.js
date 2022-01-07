const User = require('./User');

class Scooter {
    id
    battery;
    condition;
    //location;

    constructor(id, battery, condition, /*location*/){
        this.id = id;
        this.battery = battery;
        this.condition = condition;
        //this.location = location
    }
    isFullyChargedandAvail(){
        if (battery > 120 && this.condition == 'Working'){
          return true
        } else {
            return false
        }
    }
}

const newScooter = new Scooter('2312', 200, 'Working')

//console.log(newScooter.isFullyChargedandAvail())
console.log('hello')