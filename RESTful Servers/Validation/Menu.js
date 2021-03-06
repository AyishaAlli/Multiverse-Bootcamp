const { sequelize, DataTypes, Model } = require("./sequelize_index");
const { MenuItem } = require("./MenuItem");

class Menu extends Model {}
Menu.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

Menu.hasMany(MenuItem, { as: "menu_items", foreignKey: "menu_id" });
MenuItem.belongsTo(Menu, { foreignKey: "menu_id" });

module.exports = { Menu };
