var express = require('express');
var router = express.Router();

/* GET today date. */
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = yyyy + '-' + mm + '-' +dd;


/*database connection*/
var con=require('../modules/connection');
/* GET My Profile page. */

router.get('/', function(req, res, next) {
    con.query('CREATE OR REPLACE VIEW waitingList AS SELECT reg_no FROM oppointment WHERE date=?',today);
    con.query('select reg_no from waitingList',function (err, rows,fields) {
        if (err) throw err;
        res.render('list', {patientList: rows});

    });


});


router.get('/selectPatient/:id',function (req,res,next) {
    var patientId = req.params.id;
    con.query("select reg_no,firstName,lastName,age,gender,type from patient where reg_no=?",patientId, function (err,rows) {
        if (err) throw err;
        res.render('patientDetails',{patientDetail: rows});

    });

});

router.get('/prescription/:id', function(req, res, next) {
    var patientId = req.params.id;
    con.query('select Name from medicine',function (err,rows,fields) {
        if (err) throw err;
        res.render('prescription', {medicine: rows,reg_no:patientId,date:today});

    });


});



router.get('/nextDate/:id', function(req, res, next) {
    var patientId = req.params.id;
    res.render('nextDate', {reg_no:patientId});

});


router.post('/updateNextDate/:id', function(req, res, next) {
    var patientId = req.params.id;
    con.query('UPDATE oppointment\n' +
        'SET date = ?\n' +
        'WHERE reg_no=?;',[req.body.date,patientId],function (err,rows,fields) {
        if (err) throw err;
        res.redirect('/doctor/list');
    });



});




module.exports = router;
