const mysql = require('mysql2');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.envJAWSDB_URL).promise();
}else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'To_Dos_DB',
  }).promise();
  
  module.exports = connection;

}

