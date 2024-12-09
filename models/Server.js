var express = require('express');
var cors = require('express');
const path = require('path'); 

const sequelize=require('../db/database')
const db_asociations= require('../models/asociations/PersonaBautismo.association.js');


 
 class Server{

    constructor(){
        this.app=express();
        this.port= process.env.PORT;
        this.celebranteEndpoint='/celebrante';
        this.padrinoEndpoint='/padrino';
        this.apoderadoEndpoint='/apoderado';
        this.personaBautismo='/PersonaBautismo';
        this.preBautizo='/preBautizo';
        this.databaseConnection();
        this.middlewares();
        this.routes();
      
      
    }

    async databaseConnection(){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            db_asociations;
           
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
        }
     
    
    

    routes(){
        
        this.app.get('/',(req,res)=>{
            res.send('Hello World');
        })

        this.app.use( this.celebranteEndpoint,require('../routes/celebrante.routes'))
        this.app.use( this.padrinoEndpoint,require('../routes/padrino.routes'))
        this.app.use(  this.apoderadoEndpoint,require('../routes/apoderado.routes'))
        this.app.use(  this.personaBautismo,require('../routes/personaBautismo.routes'))
        this.app.use(  this.preBautizo,require('../routes/preBautizo.routes'))
        
       

          
    

    }
    middlewares(){
        this.app.use(express.static ('public'));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');   
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))
        

       
    }

    startServer(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${ this.port}`)
          })
    }


   
}

module.exports=Server;