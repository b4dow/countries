const { Router } = require("express");
const router = Router();

const  CountriesRouter  = require('./countriesRouter')
const ActivitiesRouter = require('./activitiesRouter')

router.use('/countries', CountriesRouter)
router.use('/activities', ActivitiesRouter)

module.exports = router;
