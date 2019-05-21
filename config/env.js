const env = {
  database: "testInventory",
  username: "root",
  password: "Danielim!@#1994",
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;