var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { // http://localhost:3000/users isteği gelince burası çalışır
  res.send('respond with a resource'); // Basit bir metin yanıtı gönder 
});

module.exports = router;
