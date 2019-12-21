module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("products", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        name: DataTypes.VARCHAR,
        type: DataTypes.VARCHAR,
        user_id: DataTypes.INTEGER,
        quantity: DataTypes.FLOAT,
        unit: DataTypes.VARCHAR,
        expiry_date: DataTypes.DATE
    });
    return Products;
}