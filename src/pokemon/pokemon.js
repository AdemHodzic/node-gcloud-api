const database = require('../database/database');
const Sequelize = database.Sequelize;

const Pokemon = database.define('pokemon', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  image: Sequelize.STRING
});

module.exports = Pokemon;