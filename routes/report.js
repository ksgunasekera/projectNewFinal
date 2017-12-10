var express = require('express');
var router = express.Router();

/*database connection*/
var con=require('../modules/connection');
/* GET My Profile page. */

router.get('/', function(req, res, next) {
    res.render('report');

});


router.get('/chart/:id',function (req,res,next) {
    var patientId = req.params.id;
        res.render('report2',{reg_no: patientId});

});




module.exports = router;
