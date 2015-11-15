var express = require('express');
var request=require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/connect-tornado',function(req,res,next){
  res.send('connecting python....');
  
})



module.exports = router;
