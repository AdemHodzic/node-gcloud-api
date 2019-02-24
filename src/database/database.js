const Sequelize = require('sequelize');
const config = require('../../config')
const database = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = database;