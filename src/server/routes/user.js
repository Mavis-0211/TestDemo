import express from "express"
var router = express.Router();

// mongodb
import mongoose, { connect } from "mongoose"
mongoose.Promise = global.Promise

var conn = mongoose.connect("mongodb://127.0.0.1:27017/blog")
var User = new mongoose.Schema({
    userName: String,
    QRCode: String,
    cardId: String,
    payType: String,
    visitorsNum: Number
})
var myModel = conn.model("user", User)

router.get('/user', function(req, res) {
    myModel.findOne({
        cardId: "02123213"
    }, (err, user) => {
        console.log(user)
        res.json(user)
    })
    // res.json({
    //     visitorsNum: 2,
    //     userName: "张三",
    //     QRCode: '/imgs/ewm.png',
    //     cardId: '028364758',
    //     payType: "医保"
    // })  
});

module.exports = router