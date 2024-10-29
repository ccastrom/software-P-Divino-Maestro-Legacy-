var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'bautismo_iglesia'
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var SELECT_Query= ()=>{
connection.query('SELECT * FROM PersonaBautismo ORDER BY id ASC LIMIT 5', function (error, results, fields) {
  if (error) throw error;
  results.forEach(element => {
    console.log(element);
    
 });
});
 
connection.end();
}


module.exports= {SELECT_Query}