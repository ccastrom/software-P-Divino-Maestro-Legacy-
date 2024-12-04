const { DataTypes } = require('sequelize');
const db = require('../db/database.js');




const personaBautismo = db.define('personaBautismo', {



    nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  fecha_nacimiento: {
    type: DataTypes.DATE
  },
  run: {
    type: DataTypes.STRING
  },
  domicilio: {
    type: DataTypes.STRING
  },
  fecha_bautismo: {
    type: DataTypes.DATE
  },
  fk_apoderado: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fk_celebrante: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING
  },
  
  



}, {
  tableName: 'personaBautismo', // Especifica el nombre exacto de la tabla en singular
  timestamps: false

})

module.exports = personaBautismo;