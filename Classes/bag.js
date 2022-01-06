class Bag {
    //property 
    weight;

    constructor(weight){
        this.weight = weight
    }
   
    //function
    isOverLimit(){
        if (this.weight > 23){
            return 'Too Heavy!'
            
        } else {
            return 'This bag is below the limit'
        }
        // this.weight > 23 ? true : false  Returning Undefined?
    } 
}
module.exports = Bag //Allows bag class to be used by other classes 



//Test Code
const hamzahBag = new Bag(16)
const bevBag = new Bag(25)

console.log(hamzahBag.isOverLimit())
console.log(bevBag.isOverLimit())