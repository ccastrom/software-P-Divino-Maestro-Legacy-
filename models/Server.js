var express = require('express');

 
 class Server{

    constructor(){
        this.app=express();
        this.port= process.env.PORT;
        this.routes();
        this.middlewares();
    }

    routes(){
        this.app.get('/',(req, res, next)=> {
            res.send('Hello World');
          });
    

    }
    middlewares(){
        this.app.use(express.static ('public'));
    }

    startServer(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${ this.port}`)
          })
    }


   
}

module.exports=Server;