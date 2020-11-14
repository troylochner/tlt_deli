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
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });
<<<<<<< Updated upstream

  menuItem.associate = models => {
    menuItem.belongsToMany(models.order, {
      through: "orderMenuItem",
      as: "orders",
      foreignKey: "menuItemId"
=======
  menuItem.associate = function(models) {
    menuItem.hasMany(models.Order, {
      foreignKey: "idMenuItem"
>>>>>>> Stashed changes
    });
  };
  return menuItem;
};
