var express = require("express")
var router = express.Router(); 

router.get('/visitorsList', function(req, res) {
    res.json({
        list: [
            {
                id: 1,
                userName: "李花花",
                cardId: '028364758',
                payType: "医保支付"
            },
            {
                id: 2,
                userName: "张大大",
                cardId: '20173232',
                payType: "全费支付"
            }
        ]
    })  
});

module.exports = router