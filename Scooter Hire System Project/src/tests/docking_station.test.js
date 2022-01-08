const DockingStation = require('../docking_station');
const Scooter = require('../scooter');

describe('docking station', function(){
    test('check if space is available ', function (){
        //when
        const lewishamDockingStation = new DockingStation('Lewisham',2);
        const elthamDockingStation = new DockingStation('Eltham',0);
 
        //then
        expect(lewishamDockingStation.isSpaceAvail()).toBe(true)
        expect(elthamDockingStation.isSpaceAvail()).toBe(false)
        
    }) 
    test('checks if a scooter is available', function (){
        //when
        const lewishamDockingStation = new DockingStation('Lewisham',2);
        const scooterOne = new Scooter('1111', 200, 'Working')
        lewishamDockingStation.addScooter(scooterOne)
 
        //then
        expect(lewishamDockingStation.isScooterAvail()).toBe(true)
        expect(lewishamDockingStation.scootersAvail).toContain(scooterOne.id)
        
    }) 
    
    test('adds a scooter to scootersavail array or brokenScooters array', function (){
        //when
        const lewishamDockingStation = new DockingStation('Lewisham',2);
        const scooterOne = new Scooter('1111', 200, 'Working')
        const scooterTwo = new Scooter('1111', 200, 'Broken')
        lewishamDockingStation.addScooter(scooterOne)
        lewishamDockingStation.addScooter(scooterTwo)
 
        //then
        expect(lewishamDockingStation.scootersAvail).toContain(scooterOne.id)
        expect(lewishamDockingStation.brokenScooters).toContain(scooterTwo.id)
        
    }) 

    test('checks if valid condition of scooter has been added', function (){
        //when
        const lewishamDockingStation = new DockingStation('Lewisham',2);
        const scooterOne = new Scooter('1111', 200, '')
 
        //then
        expect(lewishamDockingStation.addScooter(scooterOne)).toBe('please enter valid condition')
    }) 
   
    
    
})