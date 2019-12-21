module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("groups", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }, 
        name: DataTypes.VARCHAR
    });
    return Groups;
}