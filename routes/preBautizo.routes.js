const {Router}=require('express');
const router= Router();



const {preBautizoGET,preBautizoByIDGET,preBautizoPOST, preBautizoPUT, preBautizoDELETE}=require('../controllers/preBautizo.controller.js');

router.get('/',preBautizoGET);
router.get('/:id',preBautizoByIDGET);
router.post('/',preBautizoPOST);
router.put('/:id',preBautizoPUT);
router.delete('/:id',preBautizoDELETE);


module.exports=router;