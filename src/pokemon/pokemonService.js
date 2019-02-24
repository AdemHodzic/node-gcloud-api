const Pokemon = require('./pokemon');

const getOne = (req, res) => {
  const id = req.params.id;
  Pokemon.findByPk(id)
    .then(data => {
      if (!data) {
        res.json(404, {error: 'No Pokemon With That ID.'})
      }
      res.json(data)
    })
    .catch(err => console.error(err))
};
const getAll = (req,res) => {
  Pokemon.findAll()
    .then(data => res.json(data))
    .catch(err => console.error(err))
}

module.exports = {
  getOne,
  getAll
}