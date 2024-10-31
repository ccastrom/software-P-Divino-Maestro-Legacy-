var express = require('express');
var cors = require('express');

 
 class Server{

    constructor(){
        this.app=express();
        this.port= process.env.PORT;
        this.routes();
        this.middlewares();
    }

    routes(){
        this.app.use('/users',require('../routes/users'))

          
    

    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.static ('public'));
       
    }

    startServer(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${ this.port}`)
          })
    }


   
}

module.exports=Server;