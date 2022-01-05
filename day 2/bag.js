class bag {
    //property 
    weight;

    constructor(weight){
        this.weight = weight
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




//Test Code
const hamzahBag = new bag(16)
const bevBag = new bag(25)

console.log(hamzahBag.isOverLimit())
console.log(bevBag.isOverLimit())

