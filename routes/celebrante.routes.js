const {Router}=require('express');
const {celebranteGET,celebrantePOST, celebrantePUT, celebranteDELETE}=require('../controllers/celebrante.controller');
const router= Router();

router.get('/',celebranteGET);
router.post('/',celebrantePOST);
router.put('/:id',celebrantePUT);
router.delete('/',celebranteDELETE);


module.exports=router;