const express =require('express');
const app=express();
const path=require('path');
const login=require('./routes/login');
const registration=require('./routes/registration');
const forgetPassword=require('./routes/forgetPassword');
const bodyParser=require('body-parser');
const expressSession =require('express-session');
const expressValidator=require('express-validator');
const flash=require('connect-flash');



const port =8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/js',express.static(__dirname+'/assets/js'));
app.use('/css',express.static(__dirname+'/assets/css'));
app.use('/images',express.static(__dirname+'/assets/images'));

app.use(expressValidator());
app.use(expressSession({secret:'max',saveUninitialized:false,resave:false}));
app.use(bodyParser.json());
/*
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
*/
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',login);
//app.use('/login');
app.use('/registration',registration);
app.use('/forgetPassword',forgetPassword);

app.listen(port,()=>{
	console.log('Server running at port :'+port);
});