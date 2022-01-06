const Bag = require('./bag') // Imports bag class 
const Traveller = require('./Traveller') // Imports Traveller

class Passenger extends Traveller {
    //Properties
  passportNum;
  seatNum;

constructor(name, passportNum, seatNum){ 
    super(name) // In derived classes, super() must be called before you can use 'this'. Leaving this out will cause a reference error.
    this.passportNum = passportNum;
    this.seatNum = seatNum
}

}

module.exports = Passenger

//const lisaTraveller = new Traveller('Lisa')
//const lisa = new Passenger('Lisa','234986', '23A');
//const lisaHandLuggage = new Bag(8); //adds new bag with a weight of 8
//const lisaLargeLuggage = new Bag(22); //adds new back with a weight of 22
//lisa.addBag(lisaHandLuggage) //calls the addBag function with s parameter of one of bags I created 
//lisa.addBag(lisaLargeLuggage)

//console.log(lisa)
//console.log(lisaTraveller.bags)
//console.log(lisa)