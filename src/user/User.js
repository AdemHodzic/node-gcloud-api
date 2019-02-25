const database = require('../core/database');
const Sequelize = database.Sequelize;

const User = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  lastActive: Sequelize.NOW
});

module.exports = User;
