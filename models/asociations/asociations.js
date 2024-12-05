const Apoderado=require('../apoderado');
const PersonaBautismo=require('../personabautismo');
const Celebrante=require('../celebrante.js')
const Padrino=require('../padrinos.js')
const Pre_bautizo=require('../prebautizo.js')







//1 a muchos
Apoderado.hasMany(PersonaBautismo,{
    foreignKey: 'fk_apoderado', // Nombre de la columna en PersonaBautismo
    sourceKey: 'id',
});

PersonaBautismo.belongsTo(Apoderado,{
    foreignKey: 'fk_apoderado', // Nombre de la columna en la base de datos
    targetKey: 'id',
     as: 'apoderado'
});
//------------------------

//1 a muchos
Celebrante.hasMany(PersonaBautismo,{
    foreignKey:'fk_celebrante',
    sourceKey: 'id',
});


PersonaBautismo.belongsTo(Celebrante,{
    foreignKey: 'fk_celebrante', 
    targetKey: 'id',
     as: 'celebrante'
});

//------------------------

//muchos a muchos

PersonaBautismo.hasMany(Pre_bautizo, {
    foreignKey: 'fk_PersonaBautismo', // Clave foránea en la tabla pre_bautizo
    sourceKey: 'id',    
               // Clave primaria de personaBautismo
  });
  
  Pre_bautizo.belongsTo(PersonaBautismo, {
    foreignKey: 'fk_PersonaBautismo', // Clave foránea en pre_bautizo
    targetKey: 'id',   
    as: 'PersonaBautismo'                // Clave primaria en personaBautismo
  });
  
  // PadrinoMadrina tiene muchas entradas en PreBautizo
  Padrino.hasMany(Pre_bautizo, {
    foreignKey: 'fk_PadrinoMadrina', // Clave foránea en pre_bautizo
    sourceKey: 'id',                 // Clave primaria en padrino_madrina
  });
  
  Pre_bautizo.belongsTo(Padrino, {
    foreignKey: 'fk_PadrinoMadrina', // Clave foránea en pre_bautizo
    targetKey: 'id', 
    as: 'padrinos'                // Clave primaria en padrino_madrina
  });
 

