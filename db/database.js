const {Sequelize}= require("sequelize");


const sequelize = new Sequelize('bautismo_iglesia', 'root', '123', {
    host: 'localhost',
    dialect:'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    port:'3306'
  });



  module.exports=sequelize;
