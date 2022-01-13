const {sequelize, DataTypes, Model} = require('../sequelize_index');

class Menu extends Model {


}
Menu.init({
    title: DataTypes.STRING,
    restaurant_id: DataTypes.NUMBER
},{
    sequelize,
    timestamps: false
});

module.exports = {Menu};