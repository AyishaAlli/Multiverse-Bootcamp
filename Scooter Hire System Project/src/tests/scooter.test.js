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
    test('Checks range', function(){
        const scooterOne = new Scooter('2312', 200, 'Working', 32);
        const scooterTwo = new Scooter('2312', 200, 'Working', 9);
        

        expect(scooterOne.checkRange()).toBe('Full Range')
        expect(scooterTwo.checkRange()).toBe('please start making your way to the nearest docking station')
        
    })
})