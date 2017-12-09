var express = require('express');
var router = express.Router();

/*database connection*/
var con=require('../modules/connection');
/* GET My Profile page. */

router.get('/', function(req, res, next) {
    con.query('select * from doctor', function (err, rows,fields) {
        if (err) throw err;
        res.render('report', {doctor: rows});

    });


});




module.exports = router;
