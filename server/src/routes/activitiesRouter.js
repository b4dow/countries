const { Router } = require('express');
const { getAllActiviesHandler, postActivitiesHandler } = require('../handlers/activitiesHandler');
const activitiesRouter = Router()

activitiesRouter.get('/', getAllActiviesHandler);
activitiesRouter.post('/', postActivitiesHandler)



module.exports = activitiesRouter