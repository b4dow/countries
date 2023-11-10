const { Router } = require('express')
const { countriesAllHandler, countriesIDHandler } = require('../handlers/countriesHandler')
const countriesRouter = Router()

countriesRouter.get('/', countriesAllHandler)
countriesRouter.get('/:id', countriesIDHandler)


module.exports = countriesRouter