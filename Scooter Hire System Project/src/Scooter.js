const User = require('./User');
const DockingStation = require('./DockingStation');


class Scooter {
    id
    battery;
    condition;
    charging = false;
    range;
    //location;

    constructor(id, battery, condition, range){
        this.id = id;
        this.battery = battery;
        this.condition = condition;
        this.range = range
        //this.location = location
    }
    isFullyChargedandAvail(){
        if (this.battery > 120 && this.condition == 'Working'){
          return true
        } else {
            return false
        }
    }

    checkRange(){
        if (this.range === 32){
            return 'Full Range'
        } else if (this.range <= 10){
            return 'please start making your way to the nearest docking station'
        }
    }
    
    
    
}
module.exports = Scooter;

// //const newScooter = new Scooter('2312', 200, 'Broken')
// const lewishamDockingStation = new DockingStation('Lewisham',2);
//const scooterOne = new Scooter('1111', 200, 'Working', 2)
//console.log(scooterOne.checkRange(scooterOne));
// // const scooterTwo = new Scooter('2222', 200, 'Broken')

// lewishamDockingStation.addScooter(scooterOne)

// scooterOne.isCharging(lewishamDockingStation, scooterOne)
// console.log(scooterOne.charging)

// // console.log(lewishamDockingStation)

