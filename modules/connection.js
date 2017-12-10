var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'clinic2'
});

db.connect(function (err) {
    if(!err){
        console.log("Database Connected");
    }else {
        console.log("Database Connection Failed")
    }

});



module.exports=db;
