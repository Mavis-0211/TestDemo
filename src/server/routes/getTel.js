var express = require("express")
var router = express.Router(); 

router.get('/getTel', function(req, res) {
    res.json({
        tel: '13312123232'
    })  
});

module.exports = router