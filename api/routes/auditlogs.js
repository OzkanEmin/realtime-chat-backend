const express = require('express'); // Express framework'ünü dahil ettik 
const router = express.Router(); // Yeni bir router oluşturduk

router.get("/:id", (req, res,next) => {
    res.json({   // JSON formatında bir yanıt gönderiyoruz   
        body:req.body,
        query:req.query,
        params:req.params,
        headers:req.headers,

// get e gelen isteği içinde barındırdığı body params query headers alanlarını response olarak gönderiyoruz.
    });


})  // GET isteği için ana dizin rotası eğer next kullanılırsa bir sonraki middleware'e geçer

router.post("/:id", (req, res, next) => {
    res.json({   // POST isteği için JSON formatında bir yanıt gönderiyoruz   
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
        message: "POST request başarılı"
    });
});  // POST isteği için ana dizin rotası
module.exports = router; // Router'ı dışa aktardık ki diğer dosyalarda kullanabilelim