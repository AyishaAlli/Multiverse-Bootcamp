const Passenger = require('./passenger') 

class Plane {
    //Property
    type;
    passengers;

  constructor (type){
      this.type = type;
      this.passengers = [] // Empty Array for passengers 
  }

  board(Passenger){
      this.passengers.push(Passenger)
  }
}

const bA2342 = new Plane('BA2342')
const lisa = new Passenger('Lisa','234986', '23A');
const sam = new Passenger('Sam','309214', '22A');
bA2342.board(lisa)
bA2342.board(sam)
console.log(bA2342.passengers)

