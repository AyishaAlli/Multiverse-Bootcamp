const Passenger = require('./Passenger') 
const CrewMember = require('./CrewMember') 

class Plane {
    //Property
    type;
    people;

  constructor (type){
      this.type = type;
      this.people = [] // Empty Array for people 
  }

  board(Passenger){
      this.people.push(Passenger)
  }
}

// const lisa = new Passenger('Lisa','234986', '23A');
// const sam = new CrewMember('Sam', 'Pilot', 'StaffNo.44')
// const plane444 = new Plane('plane444')
// plane444.board(lisa)
// plane444.board(sam)
// console.log(plane444.people)

