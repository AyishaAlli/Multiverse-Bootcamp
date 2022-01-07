
const Passenger = require('../src/Passenger')


describe('defines a suite of tests for the Passenger class', function () { 
        test('returns object with information', function(){
                //given
                const lisa = new Passenger('Lisa','234986', '23A');

                //then
                expect(lisa).toBeDefined()
                expect(lisa.name).toBe('Lisa')
                expect(lisa.passportNum).toBe('234986')
                expect(lisa.seatNum).toBe('23A')
        })

});