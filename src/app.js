require('dotenv').config()
const express = require('express')
const hateoasLinker = require('express-hateoas-links')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const hateoas = require('./utils/hateoas')

const app = express()

const PokemonController = require('./pokemon/pokemonController')
const UserController = require('./user/userController')

app.use(hateoasLinker)
app.use(cors())
app.use(bodyParser.json())

app.use('/images', express.static(path.join(__dirname, 'static')))
app.use('/pokemons', PokemonController)

app.post('/login', UserController.login)
app.post('/register', UserController.register)
app.get('/logout', UserController.logout)

app.use('/', (req, res) => hateoas(req, res))

module.exports = app
