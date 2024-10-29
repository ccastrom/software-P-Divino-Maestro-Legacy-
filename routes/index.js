var express = require('express');
var router = express.Router();

router.use(express.static('views'));
router.use(express.static('views/bootstrap'));
router.use(express.static('node_modules/bootstrap/dist/js'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
