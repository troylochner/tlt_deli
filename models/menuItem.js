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

  menuItem.associate = function(models) {
    menuItem.hasMany(models.Order, {
      foreignKey: "idMenuItem"
    });
  };

  return menuItem;
};
