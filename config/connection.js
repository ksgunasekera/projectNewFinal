var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db1'
});

db.connect(function (err) {
    if(!err){
        console.log("Database Connected");
    }else {
        console.log("Database Connection Failed")
    }

});



module.exports=db;
