var express = require('express');

 
 class Server{

    constructor(){
        this.app=express();
        this.port= process.env.PORT;
        this.routes();
    }

    routes(){
        this.app.get('/',(req, res, next)=> {
            res.send('Hello World');
          });
    

    }

    startServer(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${ this.port}`)
          })
    }


   
}

module.exports=Server;