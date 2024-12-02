const { DataTypes } = require('sequelize');
const db = require('../db/database.js');
const asociation= require('./asociations/asociations.js')




const apoderado = db.define('apoderado', {



    nombre_madre: {
    type: DataTypes.STRING
  },
  nombre_padre: {
    type: DataTypes.STRING
  },
  fono: {
    type: DataTypes.STRING
  },



}, {
  tableName: 'apoderado', // Especifica el nombre exacto de la tabla en singular
  timestamps: false

})

module.exports = apoderado;