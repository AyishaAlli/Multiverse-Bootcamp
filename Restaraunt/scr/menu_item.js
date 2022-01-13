const {sequelize, DataTypes, Model} = require('../sequelize_index');

class MenuItem extends Model {


}
MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER
},{
    sequelize,
    timestamps: false
});

module.exports = {MenuItem};