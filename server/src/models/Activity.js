const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [1,15],
                    msg: "La dificultad de la actividad debe ser entre 1 a 15"
                }
            }
        },
        duracion: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        temporada: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false, freezeTableName: true })
}