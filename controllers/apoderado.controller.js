const{response,request}=require('express');
const Apoderado= require('../models/apoderado');



const apoderadoGET= async (req=request, res=response)=> {

     

    const apoderado= await Apoderado.findAll();
     //res.render('index.ejs',{result:apoderado})
     console.log(apoderado[0].id);
    res.json({
     
         apoderado
    });

    }

    const apoderadoByIDGET= async (req=request, res=response)=> {
        const {id}=req.params;

        const apoderado= await Apoderado.findByPk(id);

        if(apoderado){
            res.json({
                msg:"GET API in controller folder apoderado BY ID",
                 apoderado
            });

        }else{
            res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            })
        }
      
    
        }
const apoderadoPOST= async(req=request, res=response)=> {
    const {body}=req;
    try {
        const apoderado = new Apoderado(body);
        await apoderado.save();

        res.json(apoderado);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
  }
const apoderadoPUT=async (req=request, res=response)=> {
    const {body}=req;
    const {id}= req.params;
   

    try {
        const apoderado= await Apoderado.findByPk(id);
        if (!apoderado){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        await apoderado.update(body);
        res.json(apoderado);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
  }
const apoderadoDELETE= async(req,res=response)=>{
    const {id}= req.params;
    const {body}=req;

    try {
        const apoderado= await Apoderado.findByPk(id);
        if (!apoderado){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        //await apoderado.update({estado:false});
        await apoderado.destroy();
        res.json(apoderado);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
}



module.exports={
    apoderadoGET: apoderadoGET,
    apoderadoByIDGET:apoderadoByIDGET,
    apoderadoPOST: apoderadoPOST,
    apoderadoPUT: apoderadoPUT,
    apoderadoDELETE: apoderadoDELETE
}