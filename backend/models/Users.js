module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true
        },
        email: DataTypes.VARCHAR,
        password: DataTypes.VARCHAR,
        full_name: DataTypes.VARCHAR,
        building_code: DataTypes.INTEGER,
        room_number: DataTypes.INTEGER
    });
    return Users;
}