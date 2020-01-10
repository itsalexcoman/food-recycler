module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("products", {
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
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        days_left: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Products;
}