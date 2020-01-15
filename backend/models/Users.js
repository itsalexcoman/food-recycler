module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    building_code: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    room_number: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  });
  return Users;
};
