const{response}=require('express');


const userGET=(req, res=response)=> {
    res.json({
        msg:'GET API in controller folder'
    });
  }

const userPOST=(req, res=response)=> {
    res.json({
        msg:'POST API in controller folder'
    });
  }
const userUPDATE=(req, res=response)=> {
    res.json({
        msg:'UPDATE API in controller folder'
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
    userUPDATE,
    userDELETE
}