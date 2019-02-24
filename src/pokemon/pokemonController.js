const router = require('express').Router();
const PokemonService = require('./pokemonService');

router.get('/:id', (req,res) => {
  PokemonService.getOne(req,res);
})

router.get('/', (req,res) => {
  PokemonService.getAll(req,res);
})

module.exports = router;