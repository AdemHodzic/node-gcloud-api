const hateoasHelper = (req,res) => {
  const pokemonSchema = {
    name: 'Pokemon',
    description: 'This is how Pokemon Schema looks like.',
    properties: {
      id: {
        title: 'id',
        description: 'Unique identifier for each Pokemon',
        required: true,
        type: 'int',
        minLength: 1,
        maxLength: 31
      },
      name: {
        title: 'name',
        type: 'string',
        description: 'Name of Pokemon'
      },
      image: {
        title: 'image',
        type: 'string',
        description: 'URL to .png image of Pokemon'
      }
    }
  }

  res.json(pokemonSchema, [
    { rel: "self", method: "GET", href: '/pokemons/1' },
    { rel: "all", method: "GET", title: 'Get All Pokemons', href: '/pokemons' }
  ]);
}

module.exports = hateoasHelper;