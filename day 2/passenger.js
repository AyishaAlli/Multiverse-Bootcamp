const Bag = require('./Bag') // Imports bag class 

class Passenger {
    //Properties
  name;
  passportNum;
  seatNum;
  bags;


constructor(name, passportNum, seatNum){
    this.name = name;
    this.passportNum = passportNum;
    this.seatNum = seatNum
    this.bags = [] //Empty Array that will hold the bag names and what they weigh
}
//Method
addBag(bag){
    this.bags.push(bag) //pushes current bag to Array of bags
}

}

module.exports = Passenger

const lisa = new Passenger('Lisa','234986', '23A');
const lisaHandLuggage = new Bag(8); //adds new bag with a weight of 8
const lisaLargeLuggage = new Bag(22); //adds new back with a weight of 22
lisa.addBag(lisaHandLuggage) //calls the addBag function with s parameter of one of bags I created 
lisa.addBag(lisaLargeLuggage)
console.log(lisa.bags)