const axios = require('axios')
const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const getAllCountriesDB = async (name) => {


    if (name) {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        const FilterCountryByName = await Country.findAll({
            where: {
                nombre: capitalizedName
            }
        })
        if (!FilterCountryByName.length) throw new Error(`No se encontraron paises con el nombre ${capitalizedName}`)
        return FilterCountryByName
    }


    const countryDB = await Country.findAll({
        include: [{ model: Activity}]
    })



    if (!countryDB.length) {
        const { data } = (await axios('http://localhost:5000/countries'))
        await data.forEach(async (country) => {
            await Country.findOrCreate({
                where: {
                    id: country.cca3
                },
                defaults: {
                    id: country.cca3,
                    nombre: country.name.common,
                    imagen_bandera: country.flags.png,
                    continente: country.continents ? country.continents[0] : 'no hay continente',
                    capital: country.capital ? country.capital[0] : 'no hay capital',
                    subregion: country.subregion ? country.subregion : 'no hay subregion',
                    area: country.area,
                    poblacion: country.population,
                }
            })
        })
    }

    return countryDB;
}

const getCountryID = async (id) => {
    const countryById = await Country.findOne({
        where: {
            id: {
                [Op.iLike]: `%${id.toUpperCase()}%`
            }
        }
    })
    return countryById
}


module.exports = {
    getAllCountriesDB,
    getCountryID
}