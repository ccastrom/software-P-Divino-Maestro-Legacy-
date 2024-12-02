const {Router}=require('express');
const router= Router();



const {personaBautismoGET,personaBautismoByIDGET,personaBautismoPOST, personaBautismoPUT, personaBautismoDELETE}=require('../controllers/personaBautismo.controller');

router.get('/',personaBautismoGET);
router.get('/:id',personaBautismoByIDGET);
router.post('/',personaBautismoPOST);
router.put('/:id',personaBautismoPUT);
router.delete('/:id',personaBautismoDELETE);


module.exports=router;