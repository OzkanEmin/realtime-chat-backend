var express = require('express');
var router = express.Router();
const fs = require('fs');
let routes=fs.readdirSync(__dirname); //routes klasöründeki tüm dosyaları oku  
for(let route of routes){
 if(route.includes(".js") && route!=="index.js"){
  const mod = require(`./${route}`);
  const middleware = (mod && mod.default) ? mod.default : mod;
  if (typeof middleware === 'function') {
   router.use(`/${route.replace(".js","")}`, middleware);
  } else {
   console.warn(`[routes] ${route} geçerli bir middleware export etmiyor, atlandı`);
  }
 }
}

module.exports = router;
