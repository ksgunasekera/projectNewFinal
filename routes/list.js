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
var con=require('../config/connection');
/* GET My Profile page. */

router.get('/', function(req, res, next) {
    con.query('CREATE OR REPLACE VIEW waitingList AS SELECT patient_id FROM oppointment WHERE date=?',today);
    con.query('select patient_id from waitingList',function (err, rows,fields) {
        if (err) throw err;
        res.render('list', {patientList: rows});

    });


});


router.get('/selectPatient/:id',function (req,res,next) {
    var patientId = req.params.id;
    con.query("select patient_id,firstName,lastName,age,gender,type from patient where patient_id=?",patientId, function (err,rows) {
        if (err) throw err;
        res.render('patientDetails',{patientDetail: rows});

    });

});

router.get('/prescription/:id', function(req, res, next) {
    var patientId = req.params.id;
    con.query('select Name from medicine',function (err,rows,fields) {
        if (err) throw err;
        res.render('prescription', {medicine: rows,patient_id:patientId});

    });


});



router.get('/nextDate/:id', function(req, res, next) {
    var patientId = req.params.id;
    res.render('nextDate', {patient_id:patientId});

});


router.post('/updateNextDate/:id', function(req, res, next) {
    var patientId = req.params.id;
    console.log(req.body.date);
    con.query('UPDATE oppointment\n' +
        'SET date = ?\n' +
        'WHERE patient_id=?;',[req.body.date,patientId],function (err,rows,fields) {
        if (err) throw err;
        res.redirect('/list');
    });



});




module.exports = router;
