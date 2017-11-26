var express = require("express")
var router = express.Router(); 

router.get('/user', function(req, res) {
    res.json({
        visitorsNum: 2,
        userName: "张三",
        QRCode: '/imgs/ewm.png',
        cardId: '028364758',
        payType: "医保"
    })  
});

module.exports = router