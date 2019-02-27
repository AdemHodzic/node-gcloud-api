const userRepo = require('./userRepository')
const bcrypt = require('bcrypt')

const login = (req, res) => {
  const username = req.body.name
  const password = req.body.password

  userRepo.getUserByName(username)
    .then(data => {
      const isPasswordValid = bcrypt.compareSync(password, data.password)
      if (!isPasswordValid) {
        res.status(401).json({ error: 'Incorrect password.' })
      }

      res.json({ auth: true, user: username })
    })
    .catch(_ => res.status(404).json({ error: 'Invalid username.' }))
}

const register = async (req, res) => {
  const name = req.body.name

  const user = await userRepo.getUserByName(name)
  if (user !== null) {
    res.status(409).json({ error: 'User already exists' })
    return
  }

  const password = bcrypt.hashSync(req.body.password, 5)

  try {
    const data = await userRepo.createUser({ name, password })
    res.json({ auth: true, user: data.name })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const logout = (req, res) => {
  res.json({ auth: false, user: null })
}

module.exports = {
  login,
  register,
  logout
}
