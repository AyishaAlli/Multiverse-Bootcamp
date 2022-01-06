
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
