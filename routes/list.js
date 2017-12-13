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
/* GET Patient list page. */

router.get('/', function(req, res, next) {
    con.query('select reg_no from addmision',function (err, rows,fields) {
        if (err) throw err;
        res.render('list', {patientList: rows});

    });


});

/* remove the patient from the addmision table when patient get by doctor page. */
router.get('/selectPatient/:id',function (req,res,next) {
    var patientId = req.params.id;
    con.query("DELETE FROM ADDMISION WHERE reg_no=?;",patientId);
    con.query("select reg_no,firstName,lastName,age,gender,type from patient where reg_no=?",patientId, function (err,rows) {
        if (err) throw err;
        res.render('patientDetails',{patientDetail: rows});

    });

});

/* retrive the medicine page. */

router.get('/prescription/:id', function(req, res, next) {
    var patientId = req.params.id;
    con.query('select Tablet from medicine',function (err,rows,fields) {
        if (err) throw err;
        res.render('prescription', {medicine: rows,reg_no:patientId,date:today});

    });


});


/* get the select next date page. */
router.get('/nextDate/:id', function(req, res, next) {
    var patientId = req.params.id;
    res.render('nextDate', {reg_no:patientId});

});

/* enter the next date in to appointment table. */
router.post('/updateNextDate/:id', function(req, res, next) {
    var patientId = req.params.id;
    con.query('UPDATE appointment\n' +
        'SET date = ?\n' +
        'WHERE reg_no=?;',[req.body.date,patientId],function (err,rows,fields) {
        if (err) throw err;
        res.render('nextDate',{reg_no:patientId});
    });



});


/* insert the prescription to pdf table. */

router.post('/insert/:id', function(req, res, next) {
    var patientId = req.params.id;
    con.query("INSERT INTO pdf\n" +
        "VALUES (?,?)",[patientId,req.body.prescription],function (err,result) {
        if(err) throw err;
        res.redirect('/doctor/list/prescription/'+patientId);

    });

});

/* view the pdf list in pdf table. */
router.get('/view/:id', function(req, res, next) {
    var patientId = req.params.id;
    con.query('select prescription from pdf where reg_no=?',patientId,function (err, rows,fields) {
        if (err) throw err;
        res.render('medicineList', {medicineList: rows ,reg_no:patientId });

    });


});

/* retrive the relevent pdf from pdf   table. */
router.get('/viewPdf/:id', function(req, res,next) {
    var pdfName = req.params.name;
        res.render('viewPdf', {viewPdf: pdfName});


});



module.exports = router;
