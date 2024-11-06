const{response,request}=require('express');
const Celebrante= require('../models/celebrante');



const celebranteGET= async (req=request, res=response)=> {

    const celebrante= await Celebrante.findAll();
    res.json({
        msg:"GET API in controller folder CELEBRANTE",
         celebrante
    });

    }

    const celebranteByIDGET= async (req=request, res=response)=> {
        const {id}=req.params;

        const celebrante= await Celebrante.findByPk(id);

        if(celebrante){
            res.json({
                msg:"GET API in controller folder CELEBRANTE BY ID",
                 celebrante
            });

        }else{
            res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            })
        }
      
    
        }
const celebrantePOST=(req, res=response)=> {
  
    const {name,age}=req.body;
    res.json({
        msg:'POST API in controller folder CELEBRANTE',
        name,
        age
    });
  }
const celebrantePUT=(req, res=response)=> {
    const id =req.params.id
    res.json({
        msg:'UPDATE API in controller folder CELEBRANTE',
        id
    });
  }
const celebranteDELETE=(req,res=response)=>{
    res.json({
        msg:'DELETE API in controller folder CELEBRANTE'
    });
}



module.exports={
    celebranteGET: celebranteGET,
    celebranteByIDGET:celebranteByIDGET,
    celebrantePOST: celebrantePOST,
    celebrantePUT: celebrantePUT,
    celebranteDELETE: celebranteDELETE
}