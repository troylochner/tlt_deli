module.exports = function(sequelize, DataTypes) {
  const menuItem = sequelize.define("menuItem", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  /*
  menuItem.associate = function(models) {
    menuItem.belongsToMany(models.Order, { through: "orderMenu" });
  };*/

  return menuItem;
};
