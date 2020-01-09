module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("products", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.VARCHAR,
            allowNull: false
        },
        type: {
            type: DataTypes.VARCHAR,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        days_left: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Products;
}