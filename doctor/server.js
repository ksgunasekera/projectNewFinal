var express =require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var expressSession =require('express-session');
var expressValidator=require('express-validator');
var flash=require('connect-flash');
var fs=require('fs');
var pdf=require('pdfkit');

var port =8000;

var doctor=require('./routes/doctor');
var getPatient=require('./routes/getpatient');
var prescribe=require('./routes/prescribe');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/js',express.static(__dirname+'/assets/js'));
app.use('/css',express.static(__dirname+'/assets/css'));
app.use('/images',express.static(__dirname+'/assets/images'));

app.use('/required', express.static('required'));

app.use(expressValidator());
app.use(expressSession({secret:'max',saveUninitialized:false,resave:false}));
app.use(bodyParser.json());



app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',doctor);
app.use('/getpatient',getPatient);
app.use('/prescribe',prescribe);

app.listen(port,()=>{
	console.log('Server running at port :'+port);
});