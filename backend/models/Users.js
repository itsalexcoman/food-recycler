module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            field: 'user_id'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'user_email'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'user_password'
        },
        full_name: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'user_full_name'
        },
        building_code: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'user_building_code',
            references: {
                model: 'Buildings',
                key: 'code'
            }
        },
        room_number: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'user_room_number'
        }
    });
    return Users;
}