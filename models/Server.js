var express = require('express');
var cors = require('express');

 
 class Server{

    constructor(){
        this.app=express();
        this.port= process.env.PORT;
        this.usersEndpoint='/users';
        this.middlewares();
        this.routes();
      
      
    }

    routes(){
        this.app.use( this.usersEndpoint,require('../routes/users.routes'))

          
    

    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.static ('public'));
       
    }

    startServer(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${ this.port}`)
          })
    }


   
}

module.exports=Server;