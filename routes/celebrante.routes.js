const {Router}=require('express');
const {celebranteGET,celebranteByIDGET,celebrantePOST, celebrantePUT, celebranteDELETE}=require('../controllers/celebrante.controller');
const router= Router();

router.get('/',celebranteGET);
router.get('/:id',celebranteByIDGET);
router.post('/',celebrantePOST);
router.put('/:id',celebrantePUT);
router.delete('/',celebranteDELETE);


module.exports=router;