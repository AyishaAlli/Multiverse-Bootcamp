const DockingStation = require('../docking_station');
const Scooter = require('../scooter');

describe('docking station', function(){
    test('check if space is available ', function (){
        //when
        const lewishamDockingStation = new DockingStation('Lewisham',2);
 
        //then
        expect(lewishamDockingStation.isSpaceAvail()).toBe(true)
        
    }) 
    test('checks if scooter is available', function (){
        //when
        const lewishamDockingStation = new DockingStation('Lewisham',2);
        const scooterOne = new Scooter('1111', 200, 'Working')
        lewishamDockingStation.addScooter(scooterOne.id, scooterOne.condition)
 
        //then
        expect(lewishamDockingStation.isScooterAvail()).toBe(true)
        expect(lewishamDockingStation.addScooter()).toContain(scooterOne.id)
        
    }) 

   
    
    
})