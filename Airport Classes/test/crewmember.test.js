const CrewMember = require('../src/crewmember');
const Traveller = require('../src/Traveller')


describe('defines a suite of tests for the Passenger class', function () { 
    test('returns object with information', function(){
            //given
            const lisa = new CrewMember('Lisa','Pilot', 'ee1234');

            //then
            expect(lisa).toBeDefined()
            expect(lisa.name).toBe('Lisa')
            expect(lisa.position).toBe('Pilot')
            expect(lisa.staffNum).toBe('ee1234')
    })

});