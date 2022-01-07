const Bag = require("./Bag")

class Traveller {
    name;
    bags = [];


    constructor(name){
        this.name = name;
    }

    //Method
    addBag(bag){
    this.bags.push(bag) //pushes current bag to Array of bags
}
    
}

module.exports = Traveller 

const trav1 = new Traveller('helen')
const trav2 = new Traveller('helen')
const ff = new Bag(4)
const cc = new Bag(8)
trav1.addBag(ff)
trav1.addBag(cc)
//trav2.addBag(new Bag(5))
//console.log(trav1.bags)
//console.log(trav1.bags)
//console.log(Traveller)