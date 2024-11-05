
// Get the client
const mysql = require('mysql2/promise');

// Create the connection to database
   
    const connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password : '123',
      database : 'bautismo_iglesia'
      // port: 3306,
      // password: '',
    });
 
// A simple SELECT query
// connection.query(
//   'SELECT * FROM `Celebrante`',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );



// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '123',
//   database : 'bautismo_iglesia'
// });
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// var SELECT_Query= ()=>{
// connection.query('SELECT * FROM PersonaBautismo ORDER BY id ASC LIMIT 5', function (error, results, fields) {
//   if (error) throw error;
//   results.forEach(element => {
//     console.log(element);
    
//  });
// });
 
// connection.end();
// }


 module.exports=connection;