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
        if (this.battery > 120 && this.condition == 'Working'){
          return true
        } else {
            return false
        }
    }
}

//const newScooter = new Scooter('2312', 200, 'Broken')

//console.log(newScooter.isFullyChargedandAvail())
//console.log('hello')