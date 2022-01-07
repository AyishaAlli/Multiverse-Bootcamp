
class DockingStation{
    location
    totalSpaces
    scootersAvail
    brokenScooters = []

   constructor(location, totalSpaces, scootersAvail, /*brokenScooters*/){
    this.location = location   
    this.totalSpaces = totalSpaces;
    this.scootersAvail = scootersAvail;
    //this.brokenScooters = brokenScooters;
   }

   areScootersAvail(){
       //to check if you can get a scooter from this location
       if (this.scootersAvail > 0){
           return true
       } else {
           return false
       }
   }
   isSpaceAvail(){
       //to check if there's space to return the scooter 
       if (this.totalSpaces - this.scootersAvail - this.brokenScooters >= 1){
           return 'Yes theres space'
       } else {
           return false
       }
   }

}

module.exports = DockingStation;

const lewishamDockingStation = new DockingStation('Lewisham',10,5,0);
console.log(lewishamDockingStation.areScootersAvail())
console.log(lewishamDockingStation.isSpaceAvail())