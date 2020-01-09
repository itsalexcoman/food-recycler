module.exports = function(sequelize, DataTypes) {
    var GroupMembership = sequelize.define("groupMembership", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false
        },
        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Groups',
                key: 'id'
            },
            allowNull: false
        }
    });
    return GroupMembership;
}