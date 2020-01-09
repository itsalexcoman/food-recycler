module.exports = function(sequelize, DataTypes) {
    var Buildings = sequelize.define("buildings", {
        code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            field: 'building_code'
        },
        name: {
            type: DataTypes.VARCHAR,
            field: 'building_name'
        }
    });
    return Buildings;
}