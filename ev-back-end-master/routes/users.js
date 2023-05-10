const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const db = require('../db');

router.use(bodyParser.json({ urlencoded: true }));

router.post("/", function(req, res, next) {
    const { enroll, name, phone, password } = req.body;
    var sql = "INSERT INTO c_user(Enroll_num,S_name,P_num,Password) VALUES (?,?,?,?)";
    db.query(sql, [enroll, name, phone, password], function(err, result) {
        if (err) {
            throw err;
        } else {
            res.json({ "Status": "Success" });
        }
    })
})

router.get('/:enroll', function(req, res, next) {
    const enroll = req.params.enroll;
    var sql = `SELECT * FROM c_user WHERE Enroll_num=?`;
    db.query(sql, [enroll], function(err, row, fields) {
        if (err) {
            console.log(err)
        } else
            res.json(row);
    })
});



module.exports = router;