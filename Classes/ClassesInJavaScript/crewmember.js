class crewMember {
    name;
    position;
    staffNum; 
    
    constructor(name, position, staffNum){
        this.name = name;
        this.position = position;
        this.staffNum = staffNum;
        
    }
}

const benceCrew = new crewMember('Bence', 'CabinCrew', 22)
const bevCrew = new crewMember('Bev', 'Pilot', 3)

console.log(benceCrew)
console.log(bevCrew)