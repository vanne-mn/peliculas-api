

const mysql = require('mysql2');
require('dotenv').config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
    } else {
        console.log('Conectado a MySQL 🎉');
    }
});

module.exports = connection;

