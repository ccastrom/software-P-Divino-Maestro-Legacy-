const {Router}=require('express');
const router= Router();



const {celebranteGET,celebranteByIDGET,celebrantePOST, celebrantePUT, celebranteDELETE}=require('../controllers/celebrante.controller');

router.get('/',celebranteGET);
router.get('/:id',celebranteByIDGET);
router.post('/',celebrantePOST);
router.put('/:id',celebrantePUT);
router.delete('/:id',celebranteDELETE);


module.exports=router;