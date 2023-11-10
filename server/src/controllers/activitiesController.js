const { Activity, Country  } = require('../db')

const allActivities = async () => {
    const activities = await Activity.findAll({
        include: [{model: Country}]
    })
    return activities
}

const createActivity = async (nombre, dificultad, duracion, temporada, pais) => {
    const newActivity = await Activity.create({ nombre, dificultad, duracion, temporada })
    const countryDB = await Country.findAll({
        where: {
            nombre: pais
        }
    })

    await newActivity.addCountry(countryDB)
    return newActivity
}

module.exports = {
    allActivities,
    createActivity
}