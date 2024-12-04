const{response,request}=require('express');
const PreBautizo= require('../models/preBautizo');



const preBautizoGET= async (req=request, res=response)=> {

     

    const preBautizo= await PreBautizo.findAll();
     //res.render('index.ejs',{result:preBautizo})
     console.log(preBautizo[0].id);
    res.json({
     
         preBautizo
    });

    }

    const preBautizoByIDGET= async (req=request, res=response)=> {
        const {id}=req.params;

        const preBautizo= await PreBautizo.findByPk(id);

        if(preBautizo){
            res.json({
                msg:"GET API in controller folder preBautizo BY ID",
                 preBautizo
            });

        }else{
            res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            })
        }
      
    
        }
const preBautizoPOST= async(req=request, res=response)=> {
    const {body}=req;
    try {
        const preBautizo = new PreBautizo(body);
        await preBautizo.save();

        res.json(preBautizo);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
  }
const preBautizoPUT=async (req=request, res=response)=> {
    const {body}=req;
    const {id}= req.params;
   

    try {
        const preBautizo= await PreBautizo.findByPk(id);
        if (!preBautizo){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        await preBautizo.update(body);
        res.json(preBautizo);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
  }
const preBautizoDELETE= async(req,res=response)=>{
    const {id}= req.params;
    const {body}=req;

    try {
        const preBautizo= await PreBautizo.findByPk(id);
        if (!preBautizo){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        //await preBautizo.update({estado:false});
        await preBautizo.destroy();
        res.json(preBautizo);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
}



module.exports={
    preBautizoGET: preBautizoGET,
    preBautizoByIDGET:preBautizoByIDGET,
    preBautizoPOST: preBautizoPOST,
    preBautizoPUT: preBautizoPUT,
    preBautizoDELETE: preBautizoDELETE
}