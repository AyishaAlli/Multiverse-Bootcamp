class bag {
    //property 
    weight;

    constructor(weight){
        this.weight = weight
    }

    //Getter - Binds object property to a function that will be called
    get limit(){
        return this.isOverLimit()
    }

    //function
    isOverLimit(){
        if (this.weight > 23){
            return true
        } else {
            return false
        }
        // this.weight > 23 ? true : false  Returning Undefined?
    } 
}

class plane {
    //Property
    passengers;
  constructor (noOfPassengers){
      this.passengers = noOfPassengers;
  }


}

class passenger {
    //Properties
  name;
  passportNum;
  seatNum;

constructor(name, passportNum, seatNum){
    this.name = name;
    this.passportNum = passportNum;
    this.seatNum = seatNum
}

//Method
addBag(){
    
}

}

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

//Test Code
const hamzahBag = new bag(16)
const bevBag = new bag(25)
const benceCrew = new crewMember('Bence', 'CabinCrew', 22)
const bevCrew = new crewMember('Bev', 'Pilot', 3)

console.log(hamzahBag.limit)
console.log(bevBag.limit)
console.log(benceCrew)
console.log(bevCrew)
console.log()
