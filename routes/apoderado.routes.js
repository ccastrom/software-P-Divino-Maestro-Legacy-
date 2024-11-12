const {Router}=require('express');
const router= Router();



const {apoderadoGET,apoderadoByIDGET,apoderadoPOST, apoderadoPUT, apoderadoDELETE}=require('../controllers/apoderado.controller');

router.get('/',apoderadoGET);
router.get('/:id',apoderadoByIDGET);
router.post('/',apoderadoPOST);
router.put('/:id',apoderadoPUT);
router.delete('/:id',apoderadoDELETE);


module.exports=router;