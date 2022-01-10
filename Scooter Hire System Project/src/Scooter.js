const User = require('./user');
const DockingStation = require('./docking_station');


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

    checkRange(scooter){
        if (scooter.range = 32){
            return 'Full Range'
        } else if (scooter.range < 10){
            return 'please start making your way to the nearest docking station'
        }
        else if (scooter.range < 3){
            return 'please return your scooter to the nearest docking station'
        }
    }
    
        //charges at docking station
    // isCharging(dockingStation, scooter){ //if at docking station then this should return true
    //     for (let i = 0; i < dockingStation.length; i++) {
    //         if(dockingStation.scootersAvail[i] = scooter.id){
    //             this.charging = true

    //         } else {
    //             this.charging = false
    //         }
            
    //     }
        
    //} 
    
}
module.exports = Scooter;

// //const newScooter = new Scooter('2312', 200, 'Broken')
// const lewishamDockingStation = new DockingStation('Lewisham',2);
// const scooterOne = new Scooter('1111', 200, 'Working')
// // const scooterTwo = new Scooter('2222', 200, 'Broken')

// lewishamDockingStation.addScooter(scooterOne)

// scooterOne.isCharging(lewishamDockingStation, scooterOne)
// console.log(scooterOne.charging)

// // console.log(lewishamDockingStation)

