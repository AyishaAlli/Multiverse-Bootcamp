const { sequelize } = require('../../sequelize_index');
const { MenuItem } = require('../menu_item')


describe('MenuItem', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a menu', async () => {
        const menuItem = await MenuItem.create({ name: 'Sausage', price: 3.99 })
        expect(menuItem.id).toBe(1)
    })
})
