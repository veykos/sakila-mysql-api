// require the mysql package;
const mysql = require('mysql2')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: 'sakila',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to DB')
})
