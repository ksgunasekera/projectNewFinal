const express =require('express');
const app=express();
const path=require('path');
const login=require('./routes/login');
const registration=require('./routes/registration');
const forgetPassword=require('./routes/forgetPassword');
const admin=require('./routes/admin');

const bodyParser=require('body-parser');
const expressSession =require('express-session');
const expressValidator=require('express-validator');
const flash=require('connect-flash');

/* Access Doctor Module*/
var home = require('./routes/home');
var users = require('./routes/users');
var myProfile = require('./routes/myProfile');
var report = require('./routes/report');
var list = require('./routes/list');

const port =8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/js',express.static(__dirname+'/assets/js'));
app.use('/css',express.static(__dirname+'/assets/css'));
app.use('/fonts',express.static(__dirname+'/assets/fonts'));
app.use('/images',express.static(__dirname+'/assets/images'));

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

app.use('/',login);
app.use('/registration',registration);
app.use('/forgetPassword',forgetPassword);
app.use('/admin',admin);

/* Start Doctor Module */
app.use('/doctor/home', home);
app.use('/doctor/users', users);
app.use('/doctor/',myProfile);
app.use('/doctor/report',report);
app.use('/doctor/list',list);




app.listen(port,()=>{
	console.log('Server running at port :'+port);
});