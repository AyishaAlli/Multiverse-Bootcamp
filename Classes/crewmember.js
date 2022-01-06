const Bag = require('./bag');
const Traveller = require('./Traveller') // Imports Traveller

class crewMember extends Traveller {
    position;
    staffNum; 
    
    constructor(name, position, staffNum){
        super(name);
        this.position = position;
        this.staffNum = staffNum;
        
    }
}

//const ritaCrew = new crewMember('Rita', 'CabinCrew', 22)
const ritaTraveller = new Traveller('Rita')
const ritaLargeLuggage = new Bag(22);
ritaTraveller.addBag(ritaLargeLuggage)
//const benceCrew = new Traveller('Bence')
//const bevCrew = new crewMember('Bev', 'Pilot', 3)

console.log(ritaTraveller)
