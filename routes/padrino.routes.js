const {Router}=require('express');
const router= Router();



const {padrinoGET,
    padrinoByIDGET,
    padrinoPOST,
    padrinoPUT,
    padrinoDELETE }=require('../controllers/padrino.controller');

router.get('/',padrinoGET);
router.get('/:id',padrinoByIDGET);
router.post('/',padrinoPOST);
router.put('/:id',padrinoPUT);
router.delete('/:id',padrinoDELETE);


module.exports=router;