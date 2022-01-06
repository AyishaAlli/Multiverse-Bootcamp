const Bag = require('./bag');
const Traveller = require('./Traveller') // Imports Traveller

class CrewMember extends Traveller {
    position;
    staffNum; 
    
    constructor(name, position, staffNum){
        super(name);
        this.position = position;
        this.staffNum = staffNum;
        
    }
}

module.exports = CrewMember

//const ritaCrew = new crewMember('Rita', 'CabinCrew', 22)
// const ritaTraveller = new Traveller('Rita')
// const ritaLargeLuggage = new Bag(22);
// ritaTraveller.addBag(ritaLargeLuggage)
// //const benceCrew = new Traveller('Bence')
// //const bevCrew = new CrewMember('Bev', 'Pilot', 3)

// console.log(ritaTraveller)
