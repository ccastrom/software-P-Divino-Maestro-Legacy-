const {Router}=require('express');
const {userGET,userPOST,userUPDATE, userDELETE}=require('../controllers/users.controller');
const router= Router();

router.get('/',userGET);
router.put('/',userUPDATE);
router.post('/',userPOST);
router.delete('/',userDELETE);


module.exports=router;