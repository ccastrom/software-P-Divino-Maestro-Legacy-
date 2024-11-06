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
const celebrantePOST= async(req=request, res=response)=> {
    const {body}=req;
    try {
        const celebrante = new Celebrante(body);
        await celebrante.save();

        res.json(celebrante);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
  }
const celebrantePUT=async (req=request, res=response)=> {
    const {body}=req;
    const {id}= req.params;
   

    try {
        const celebrante= await Celebrante.findByPk(id);
        if (!celebrante){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        await celebrante.update(body);
        res.json(celebrante);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
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