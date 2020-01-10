module.exports = function(sequelize, DataTypes) {
    var GroupMembership = sequelize.define("groupMembership", {
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
    return GroupMembership;
}