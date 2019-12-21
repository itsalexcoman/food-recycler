module.exports = function(sequelize, DataTypes) {
    var Buildings = sequelize.define("buildings", {
        code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        name: DataTypes.VARCHAR
    });
    return Buildings;
}