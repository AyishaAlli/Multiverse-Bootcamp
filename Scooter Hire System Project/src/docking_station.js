const Scooter = require('./scooter')

class DockingStation{
    location
    totalSpaces
    scootersAvail = []
    brokenScooters = []

   constructor(location, totalSpaces){
    this.location = location   
    this.totalSpaces = totalSpaces;
    //this.scootersAvail = scootersAvail;
   }

   isScooterAvail(){
       //to check if you can get a scooter from this location
       if (this.scootersAvail.length > 0){
           return true
       } else {
           return false
       }
   }
    isSpaceAvail(){
       //to check if there's space to return the scooter 
       if (this.totalSpaces - this.scootersAvail.length - this.brokenScooters.length >= 1){
           return true
       } else {
           return false
       }
       
   }

    addScooter(scooterId, condition){
        if (condition == 'Working'){
            this.scootersAvail.push(scooterId)
    
        } else if (condition === 'Broken'){
            this.brokenScooters.push(scooterId)
        } else {
            console.log('please enter valid condition')
        }
    }
}

module.exports = DockingStation;

//const lewishamDockingStation = new DockingStation('Lewisham',2);
//const scooterOne = new Scooter('1111', 200, 'Working')
//const scooterTwo = new Scooter('2222', 200, 'Broken')


