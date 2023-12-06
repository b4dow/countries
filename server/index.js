const axios = require("axios");
require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { getAllCountriesDB } = require("./src/controllers/countriesController");
const PORT = process.env || 3001;

conn.sync({ alter: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => console.error(error));
