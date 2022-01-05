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
    this.bags.push(bag)
}

}

module.exports = Passenger

const lisa = new Passenger('Lisa','234986', '23A');
const lisaHandLuggage = new Bag(8);
const lisaLargeLuggage = new Bag(22);
lisa.addBag(lisaHandLuggage)
lisa.addBag(lisaLargeLuggage)
console.log(lisa.bags)