const{response,request}=require('express');
const Padrino= require('../models/padrinos');



const padrinoGET= async (req=request, res=response)=> {

     

    const padrino= await Padrino.findAll();
     //res.render('index.ejs',{result:padrino})
     console.log(padrino[0].id);
    res.json({
     
         padrino
    });

    }

    const padrinoByIDGET= async (req=request, res=response)=> {
        const {id}=req.params;

        const padrino= await Padrino.findByPk(id);

        if(padrino){
            res.json({
                msg:"GET API in controller folder padrino BY ID",
                 padrino
            });

        }else{
            res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            })
        }
      
    
        }
const padrinoPOST= async(req=request, res=response)=> {
    const {body}=req;
    try {
        const padrino = new Padrino(body);
        await padrino.save();

        res.json(padrino);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
  }
const padrinoPUT=async (req=request, res=response)=> {
    const {body}=req;
    const {id}= req.params;
   

    try {
        const padrino= await Padrino.findByPk(id);
        if (!padrino){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        await padrino.update(body);
        res.json(padrino);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
  }
const padrinoDELETE= async(req,res=response)=>{
    const {id}= req.params;
    const {body}=req;

    try {
        const padrino= await Padrino.findByPk(id);
        if (!padrino){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        //await padrino.update({estado:false});
        await padrino.destroy();
        res.json(padrino);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
}

module.exports={
    padrinoGET: padrinoGET,
    padrinoByIDGET: padrinoByIDGET,
    padrinoPOST: padrinoPOST,
    padrinoPUT: padrinoPUT,
    padrinoDELETE: padrinoDELETE

}
