const Scooter = require('./Scooter')

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



addScooter(scooter){
    if (scooter.condition === 'Working'){
        this.scootersAvail.push(scooter.id)

    } else if (scooter.condition === 'Broken'){
        this.brokenScooters.push(scooter.id)
    } else {
        return 'please enter valid condition'
    }
}


    
 }

 


module.exports = DockingStation;

// const lewishamDockingStation = new DockingStation('Lewisham',2);
// const scooterOne = new Scooter('1111', 200, 'Wordg')
// const scooterTwo = new Scooter('2222', 200, 'Broken')

// lewishamDockingStation.addScooter(scooterOne)
// console.log(lewishamDockingStation)

