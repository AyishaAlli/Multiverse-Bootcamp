const User = require('../user');
const Scooter = require('../scooter')
const Maintenance = require('../maintenance');

describe('Maintenance', function(){
    test('creates a new employee', function(){
        //when
        const bob = new Maintenance('Bob', '1234')
        //then 
        expect(bob.name).toBe('Bob')
        expect(bob.employeeNo).toBe('1234')
    })

    test('adds job',function(){
        //when
        const bob = new Maintenance('Bob', '1234')
        const scooterTwo = new Scooter('2222', 200, 'Broken')
        bob.addJob(scooterTwo);

        //then
        expect(bob.pendingJobs).toContain(scooterTwo.id)

    })
})