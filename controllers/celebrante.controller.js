const{response,request}=require('express');



const celebranteGET= async (req=request, res=response)=> {
    res.json({
        msg:"GET API in controller folder CELEBRANTE"
    });

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
    celebrantePOST: celebrantePOST,
    celebrantePUT: celebrantePUT,
    celebranteDELETE: celebranteDELETE
}