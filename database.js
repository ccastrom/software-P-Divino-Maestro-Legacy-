var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'bautismo_iglesia'
});
 
connection.connect();
 
connection.query('SELECT * FROM PersonaBautismo ORDER BY id ASC', function (error, results, fields) {
  if (error) throw error;
  results.forEach(element => {
    console.log(element);
    
 });
});
 
connection.end();