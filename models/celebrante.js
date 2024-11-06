const { DataTypes } = require('sequelize');
const db = require('../db/database.js');




const Celebrante = db.define('Celebrante', {



  nombre: {
    type: DataTypes.STRING
  },
  rol: {
    type: DataTypes.STRING
  },


}, {
  tableName: 'Celebrante', // Especifica el nombre exacto de la tabla en singular
  timestamps: false

})

module.exports = Celebrante;
