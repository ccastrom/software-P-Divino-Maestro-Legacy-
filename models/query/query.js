
const { Op, fn,literal } = require('sequelize');
const PersonaBautismo= require('../personabautismo');
const Apoderado= require('../apoderado.js');
const Celebrante= require('../celebrante.js');
const Padrinos= require('../padrinos.js');
const PreBautizo= require('../prebautizo.js');



var SELECTHijosBautizados={
    attributes:[
        "nombre",   
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
             attributes: ['nombre','rol']
         },
         {
            model: Padrinos,
            as:'padrinos',
            attributes: [[
                fn(
                    'GROUP_CONCAT',
                
                    literal("padrinos.nombrePadrino_Madrina SEPARATOR ','")
                  ),
                  'nombresPadrinos'
            ]],
            through: {
                attributes: ['fecha_prebautizo', 'hora_prebautizo']
        },
    }
     
    ],
    
        group: ['personabautismo.id']

}
  
        


    


module.exports={SELECTHijosBautizados:SELECTHijosBautizados}