var express = require('express');
var router = express.Router();

/*database connection*/
var con=require('../modules/connection');
/* GET My Profile page. */

router.get('/', function(req, res, next) {
    con.query('select * from staff where staff_Id=7294639037', function (err, rows,fields) {
        if (err) throw err;
        res.render('myProfile', {doctor: rows});

    });


});




module.exports = router;
