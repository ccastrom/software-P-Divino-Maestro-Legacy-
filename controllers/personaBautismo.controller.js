const{response,request}=require('express');
const PersonaBautismo= require('../models/personabautismo');
const Apoderado= require('../models/apoderado.js');
const Celebrante= require('../models/celebrante.js');



const personaBautismoGET= async (req=request, res=response)=> {

     

    const personaBautismo= await PersonaBautismo.findAll({
      
       
    });
     //res.render('index.ejs',{result:personaBautismo})
     console.log(personaBautismo[0].id);
    res.json({
     
         personaBautismo
    });

    }

    const personaBautismoByIDGET= async (req=request, res=response)=> {
        const {id}=req.params;

        const personaBautismo= await PersonaBautismo.findByPk(id,{
            attributes:[
                "nombre"
            ],
            include:[
                {
                    model: Apoderado,
                    as:'apoderado',
                    attributes: ['nombre_madre', 'nombre_padre', 'fono']
                },
                {
                    model: Celebrante,
                    as:'celebrante',
                    attributes: ['nombre']
                },
            ],
        });

        if(personaBautismo){
            res.json({
                msg:"GET API in controller folder personaBautismo BY ID",
                 personaBautismo
            });

        }else{
            res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            })
        }
      
    
        }
const personaBautismoPOST= async(req=request, res=response)=> {
    const {body}=req;
    try {
        const personaBautismo = new PersonaBautismo(body);
        await personaBautismo.save();

        res.json(personaBautismo);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
  }
const personaBautismoPUT=async (req=request, res=response)=> {
    const {body}=req;
    const {id}= req.params;
   

    try {
        const personaBautismo= await PersonaBautismo.findByPk(id);
        if (!personaBautismo){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        await personaBautismo.update(body);
        res.json(personaBautismo);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
  }
const personaBautismoDELETE= async(req,res=response)=>{
    const {id}= req.params;
    const {body}=req;

    try {
        const personaBautismo= await PersonaBautismo.findByPk(id);
        if (!personaBautismo){
            return res.status(404).json({
                msg:`User with id:  ${ id } does not exist`
            });
        }
        //await personaBautismo.update({estado:false});
        await personaBautismo.destroy();
        res.json(personaBautismo);



    } catch (error) {
        console.log(error),
        res.status(500).json({   
            msg:"An error appear"
        })
        
    }
   
}



module.exports={
    personaBautismoGET: personaBautismoGET,
    personaBautismoByIDGET:personaBautismoByIDGET,
    personaBautismoPOST: personaBautismoPOST,
    personaBautismoPUT: personaBautismoPUT,
    personaBautismoDELETE: personaBautismoDELETE
}