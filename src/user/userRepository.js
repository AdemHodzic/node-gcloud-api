const User = require('./User')

const getUserById = (id) => {
  return User.findByPk(id)
}

const getUserByName = (name) => {
  return User.findOne({
    where: {
      name: name
    }
  })
}

const createUser = (user) => {
  return User.create(user)
}

module.exports = {
  getUserById,
  getUserByName,
  createUser
}
