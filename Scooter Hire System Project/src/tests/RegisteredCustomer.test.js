const User = require('../User');
const DockingStation = require('../DockingStation');
const Scooter = require('../Scooter');
const RegisteredCustomer = require('../RegisteredCustomer');

describe('registered customer', function(){
    test('creates new customer', function(){
        //when
        rae = new RegisteredCustomer('Rae', 'aa@.com')
        //then
        expect(rae.name).toBe('Rae')
        expect(rae.email).toBe('aa@.com')
    })
    test('adds payment details', function(){
        rae = new RegisteredCustomer('Rae', 'aa@.com')
        rae.addPaymentDetails('20-20-20', '222222')
        
        expect(rae.PaymentDetails.sortCode).toContain('20-20-20')
        expect(rae.PaymentDetails.accNo).toContain('222222')
        
    })
    test('starts journey', function(){
        const rae = new RegisteredCustomer('Rae', 'aa@.com')
        const scooter12 = new Scooter('1111', 120, 'Working', 32)
        rae.startJourney(scooter12)
        
        expect(rae.withScooter).toBe(true)
        expect(rae.scooterId).toBe(scooter12.id)
        
    })
    test('ends journey ', function(){
        const rae = new RegisteredCustomer('Rae', 'aa@.com')
        const scooter12 = new Scooter('1111', 120, 'Working', 32)
        rae.endJourney(scooter12)

        expect(rae.withScooter).toBe(false);
        expect(rae.scooterId).toBe('')
     })
})