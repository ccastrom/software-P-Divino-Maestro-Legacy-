const Apoderado=require('../apoderado');
const PersonaBautismo=require('../personabautismo');









Apoderado.hasMany(PersonaBautismo,{
    foreignKey: 'fk_apoderado', // Nombre de la columna en PersonaBautismo
    sourceKey: 'id',
});

PersonaBautismo.belongsTo(Apoderado,{
    foreignKey: 'fk_apoderado', // Nombre de la columna en la base de datos
    targetKey: 'id',
     as: 'apoderado'
});


