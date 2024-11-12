const { DataTypes } = require('sequelize');
const db = require('../db/database.js');




const Padrino = db.define('Padrino', {



  nombrePadrino_Madrina: {
    type: DataTypes.STRING
  },
  certificado: {
    type: DataTypes.BOOLEAN
  },


}, {
  tableName: 'padrino_madrina', // Especifica el nombre exacto de la tabla en singular
  timestamps: false

})

module.exports = Padrino;
