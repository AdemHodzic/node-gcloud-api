const Sequelize = require('sequelize')

const dbName = process.env.SQL_DATABASE
const dbUser = process.env.SQL_USER
const dbPassword = process.env.SQL_PASSWORD
// const dbHost = process.env.SQL_HOST
const dbSocket = process.env.INSTANCE_CONNECTION_NAME || ''

const database = new Sequelize(dbName, dbUser, dbPassword, {
  host: `/cloudsql/${dbSocket}`,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    socketPath: `/cloudsql/${dbSocket}`
  }
})

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = database
