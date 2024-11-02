const{response,request}=require('express');


const userGET=(req=request, res=response)=> {
    const {q,name,apikey}=req.query;
    res.json({
        msg:'GET API in controller folder',
        name
    });
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