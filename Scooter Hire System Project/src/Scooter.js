const User = require('./user');
const DockingStation = require('./docking_station');


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

    isBroken(){
        if (this.condition == 'Broken'){
            brokenScooters.push(this.id)
            console.log('worked')
        }
    }
}

const newScooter = new Scooter('2312', 200, 'Broken')

console.log(newScooter.isBroken())
//console.log('hello')