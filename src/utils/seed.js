const fetch = require('node-fetch');
const api = 'https://pokeapi.co/api/v2/pokemon-form/';
const Pokemon = require('../pokemon/pokemon');
const imagePath = 'localhost:8080/images/pokemon'
fetch(`${api}1`)
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

for (let i = 1; i < 21; i++) {
  fetch(`${api}${i}`)
  .then(data => data.json())
  .then(data => {
    Pokemon.create({
      id: data.id,
      name: data.name,
      image: `${imagePath}${data.id}.png`
    })
    .then(poke => console.log(`CREATED: ${poke}`))
  })
  .catch(err => console.error(err));
}
