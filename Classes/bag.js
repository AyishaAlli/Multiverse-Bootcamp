class Bag {
    //property 
    weight;

    constructor(weight){
        this.weight = weight
    }
   
    //function
    isOverLimit(){
        return this.weight > 23 ? true : false 

    } 
}
module.exports = Bag //Allows bag class to be used by other classes 



//Test Code
//const hamzahBag = new Bag(16)
//const bevBag = new Bag(25)

//console.log(hamzahBag.isOverLimit())
//console.log(bevBag.isOverLimit())