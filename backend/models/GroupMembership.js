module.exports = function(sequelize, DataTypes) {
    var GroupMembership = sequelize.define("groupMembership", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        user_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER
    });
    return GroupMembership;
}