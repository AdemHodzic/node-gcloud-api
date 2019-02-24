const express = require('express');
const hateoasLinker =  require('express-hateoas-links');;
const path = require('path')
const cors = require('cors')

const hateoas = require('./utils/hateoas');

const app = express();

const PokemonController = require('./pokemon/pokemonController');

app.use(hateoasLinker)
app.use(cors())

app.use('/images',express.static(path.join(__dirname,'static')));

app.use('/pokemons', PokemonController);

app.use('/', (req,res) => hateoas(req,res));

module.exports = app;