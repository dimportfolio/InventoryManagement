// bring in env object that contains config information
const env = require("./env");

// create a Sequelize-MySQL connection 
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Models/tables
db.Inventory = require("../models/Inventory")(sequelize, Sequelize);

module.exports = db;