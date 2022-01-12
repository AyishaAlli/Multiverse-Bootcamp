const User = require('../User')
const Admin = require('../admin')
const Scooter = require('../scooter')


describe('admin', function(){
    test('creates user', function(){
        //when
        const julie = new Admin('Julie', 342152);
        //then
        expect(julie.name).toBe('Julie');
        expect(julie.EmployeeNo).toBe(342152)
        
    })
    test('successfully marks issue with scooter', function(){
        const julie = new Admin('Julie', 342152);
        const scooterOne = new Scooter('1111', 200, 'Working')
        julie.markIssue(scooterOne)

        expect(scooterOne.condition).toBe('Broken');
        expect(julie.Reported).toContain(scooterOne.Id)
    })

})