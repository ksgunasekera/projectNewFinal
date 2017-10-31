var mysql=require('mysql');
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db1'
});
module.exports.pool=pool;