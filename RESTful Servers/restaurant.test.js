const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
//const {menu_item} = require('./menu_item')

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
       // await sequelize.sync({ force: true });
    })

    // test('can create a restaurant', async () => {
    //     const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
    //     expect(restaurant.id).toBe(1)
    // })
    test('has menus', async () => {
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' });
        const menu = await Menu.create({title: 'Breakfast'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].title).toBe('Breakfast')
    })
})
