module.exports = function(sequelize, DataTypes) {
    var Membership = sequelize.define("membership", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false
        },
        group_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: 'Groups',
                key: 'id'
            },
            allowNull: false
        }
    }, {
        tableName: "membership"
    });
    return Membership;
}