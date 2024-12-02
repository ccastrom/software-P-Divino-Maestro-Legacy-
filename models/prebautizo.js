const { DataTypes } = require('sequelize');
const db = require('../db/database.js');




const pre_bautizo = db.define('pre_bautizo', {



    fk_PersonaBautismo: {
    type: DataTypes.INTEGER
  },
  fk_PadrinoMadrina: {
    type: DataTypes.INTEGER
  },
  fecha_prebautizo: {
    type: DataTypes.DATE
  },
  hora_prebautizo: {
    type: DataTypes.STRING
  },
  tipo_prebautizo: {
    type: DataTypes.STRING
  },

}, {
  tableName: 'pre_bautizo', // Especifica el nombre exacto de la tabla en singular
  timestamps: false

})

module.exports = pre_bautizo;