var express = require("express")
var router = express.Router(); 

router.get('/userInfo', function(req, res) {
    res.json({
        userName: "张三",
        IDNumber: "333222199302119988",
        userTel: "13312123232",
        touchName: "李四",
        touchTel: "18819192121",
        cardId: '028364758',
        payType: "北京医保"
    })  
});

module.exports = router