const { allActivities, createActivity } = require("../controllers/activitiesController")


const getAllActiviesHandler = async (req, res) => {
    try {
        const response = await allActivities()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postActivitiesHandler = async (req, res) => {
    const { nombre, dificultad, duracion, temporada, pais } = req.body
    try {

        const response = await createActivity(nombre, dificultad, duracion, temporada, pais)
        res.status(201).json(response)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllActiviesHandler,
    postActivitiesHandler
}