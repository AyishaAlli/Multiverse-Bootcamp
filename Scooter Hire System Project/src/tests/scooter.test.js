const { TestWatcher } = require("jest")
const Scooter = require("../scooter");


describe('', function(){
    test('if working scooter is fully charge', function (){
        //when
        const newScooter = new Scooter('2312', 200, 'Working')
        const anotherScooter = new Scooter('2312', 100, 'Working')

        //then 
        expect(newScooter.isFullyChargedandAvail()).toBe(true)
        expect(anotherScooter.isFullyChargedandAvail()).toBe(false)
        
    }) 
})