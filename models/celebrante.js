const {  DataTypes  } = require('sequelize');
const db=require('../db/database.js');


const Celebrante= db.define('Celebrante',{
    name:{
      type:DataTypes.STRING
    },
    rol:{
      type:DataTypes.STRING
    }

})

module.exports=Celebrante;
