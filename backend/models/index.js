const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const db = {};
const basename = path.basename(module.filename);
const dbConfig = require('../config/db.json')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: 'mysql',
    host: dbConfig.hostname
})

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch((err) => {
			console.log('Unable to connect to the database:', err);
		});
		
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Buildings = require('./Buildings')(sequelize, Sequelize);
db.Users = require('./Users')(sequelize, Sequelize);
db.Groups = require('./Groups')(sequelize, Sequelize);
db.Membership = require('./Membership')(sequelize, Sequelize);
db.Products = require('./Products')(sequelize, Sequelize);

db.Users.belongsTo(db.Buildings, {
  foreignKey: 'building_code'
})
db.Groups.belongsTo(db.Users, {
  foreignKey: 'admin_id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
})
db.Users.hasMany(db.Products, {
  foreignKey: 'user_id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
})

db.Users.belongsToMany(db.Groups, {
  through: db.Membership,
  as: 'groups',
  foreignKey: 'user_id'
});
db.Groups.belongsToMany(db.Users, {
  through: db.Membership,
  as: 'users',
  foreignKey: 'group_id'
});

module.exports = db;