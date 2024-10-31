const {Router}=require('express');

const router= Router();


router.app.get('/',(req, res, next)=> {
  res.json({
      msg:'GET API'
  });
});
router.app.put('/',(req, res, next)=> {
  res.json({
      msg:'PUT API'
  });
});
router.app.post('/',(req, res, next)=> {
  res.json({
      msg:'POST API'
  });
});
router.app.delete('/',(req, res, next)=> {
  res.json({
      msg:'DELETE API'
  });
});


module.export=router;