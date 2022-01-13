const {sequelize} = require('../../sequelize_index');
const {Menu} = require('../menu')
const {MenuItem} = require('../menu_item')


describe('Menu', () => {
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
        const menu = await Menu.create({ title: 'Breakfast'})
        expect(menu.title).toBe('Breakfast')
    })

    // test('has menu items', async () => {
    //     const menu = await Menu.create({title: 'Breakfast'});
    //     const menuItem = await MenuItem.create({ name: 'Sausages', price:3 });
    //     await menu.addMenu(menuitem);
    //     const menu_items = await restaurant.getMenuItems();
    //     expect(menu_items[0].name).toBe('Sausages')
    // })
})
