const {
  getAllCountriesDB,
  getCountryID
} = require('../controllers/countriesController')

const countriesAllHandler = async (req, res) => {
  const { name } = req.query
  try {
    const response = await getAllCountriesDB(name)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const countriesIDHandler = async (req, res) => {
  const { id } = req.params
  try {
    const response = await getCountryID(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  countriesAllHandler,
  countriesIDHandler
}
