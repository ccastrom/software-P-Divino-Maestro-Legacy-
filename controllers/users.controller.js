const{response,request}=require('express');
const connection=require('../database');


const userGET= async (req=request, res=response)=> {
    try {
        var [resultQuery]= await connection.query("SELECT * FROM Celebrante;")

        console.table(resultQuery[4].nombre);

        for (let i = 0; i < resultQuery.length; i++) {
            const element = resultQuery[i].nombre;
            console.log(element);
            
        }

        
        
       
        

        res.json({
            resultQuery
        })
       
    } catch (error) {
        console.log(error);
        
    }

    }
const userPOST=(req, res=response)=> {
  
    const {name,age}=req.body;
    res.json({
        msg:'POST API in controller folder',
        name,
        age
    });
  }
const userPUT=(req, res=response)=> {
    const id =req.params.id
    res.json({
        msg:'UPDATE API in controller folder',
        id
    });
  }
const userDELETE=(req,res=response)=>{
    res.json({
        msg:'DELETE API in controller folder'
    });
}



module.exports={
    userGET,
    userPOST,
    userPUT,
    userDELETE
}