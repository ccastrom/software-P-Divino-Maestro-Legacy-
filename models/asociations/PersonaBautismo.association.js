const Apoderado=require('../apoderado');
const PersonaBautismo=require('../personabautismo');
const Celebrante=require('../celebrante.js')
const Padrinos=require('../padrinos.js')
const Pre_bautizo=require('../prebautizo.js')




Apoderado.hasMany(PersonaBautismo,{
    foreignKey:"fk_apoderado",

})
PersonaBautismo.belongsTo(Apoderado,{
    foreignKey:'fk_apoderado',
    as:'apoderado'
})

Celebrante.hasMany(PersonaBautismo,{
    foreignKey:'fk_Celebrante'
})
PersonaBautismo.belongsTo(Celebrante,{
    foreignKey:"fk_Celebrante",
    as:"celebrante"
})


Padrinos.belongsToMany(PersonaBautismo,{
    through:'pre_bautizo',
    foreignKey:'fk_PadrinoMadrina',
    otherKey:'fk_PersonaBautismo',
    timestamps:false
})

PersonaBautismo.belongsToMany(Padrinos,{
    through:'pre_bautizo',
    foreignKey:'fk_PersonaBautismo',
    otherKey:'fk_PadrinoMadrina',
    as:'padrinos',
    timestamps:false
});


Pre_bautizo.belongsTo(PersonaBautismo,{
    foreignKey:'fk_personaBautismo',
    timestamps:false
    
});

Pre_bautizo.belongsTo(Padrinos,{
    foreignKey:'fk_PadrinoMadrina',
    timestamps:false,
   
})