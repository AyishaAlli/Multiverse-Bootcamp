const Bag = require("../bag")
const Traveller = require("../Traveller")


describe('defines a suite of tests for the Passenger class', function(){
    test('', function(){
        //given
        const lisa = new Traveller('lisa')
        const lisasBag = new Bag(4)
        lisa.addBag(lisasBag) //adds the bag to the array of bags 
        

        expect(lisa.bags).toContain(lisasBag) //checks if the array of bags contain lisasBag
    })
})