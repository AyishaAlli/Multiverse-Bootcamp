const Passenger = require('./ClassesInJavaScript/passenger') 

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

const plane2342 = new Plane('plane2342')
const lisa = new Passenger('Lisa','234986', '23A');
const sam = new Passenger('Sam','309214', '22A');
plane2342.board(lisa)
plane2342.board(sam)
console.log(plane2342.passengers)

