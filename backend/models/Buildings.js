module.exports = function(sequelize, DataTypes) {
    var Buildings = sequelize.define("buildings", {
        code: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT
        }
    });
    return Buildings;
}