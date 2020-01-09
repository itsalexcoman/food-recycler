module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("groups", {
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
        description: {
            type: DataTypes.VARCHAR,
            allowNull: true
        },
        admin_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false
        }
    });
    return Groups;
}