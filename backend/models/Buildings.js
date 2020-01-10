module.exports = function(sequelize, DataTypes) {
    var Buildings = sequelize.define("buildings", {
        code: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            field: 'building_code'
        },
        name: {
            type: DataTypes.TEXT,
            field: 'building_name'
        }
    });
    return Buildings;
}