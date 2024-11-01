const {Router}=require('express');

const router= Router();


router.get('/',(req, res, next)=> {
  res.json({
      msg:'GET API'
  });
});
router.put('/',(req, res, next)=> {
  res.json({
      msg:'PUT API'
  });
});
router.post('/',(req, res, next)=> {
  res.json({
      msg:'POST API'
  });
});
router.delete('/',(req, res, next)=> {
  res.json({
      msg:'DELETE API'
  });
});


module.exports=router;