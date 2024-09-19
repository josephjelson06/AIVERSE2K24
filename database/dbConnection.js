// const mysql = require('mysql2');

// // Set up the MySQL database connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'techguy',        // Replace with your MySQL username
//     password: 'password', // Replace with your MySQL password
//     database: 'event_registration'
// });

// // Connect to the database
// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Database.');
// });

// module.exports = db;

const { Pool } = require('pg');
require('dotenv').config();  // Ensure you have the dotenv package to load environment variables

// Set up the PostgreSQL database connection using environment variables
const pool = new Pool({

    // host: process.env.DB_HOST,       // PostgreSQL host from environment variable
    // user: process.env.DB_USER,       // PostgreSQL username from environment variable
    // password: process.env.DB_PASSWORD, // PostgreSQL password from environment variable
    // database: process.env.DB_NAME,   // PostgreSQL database name from environment variable
    // port: process.env.DB_PORT,       // PostgreSQL port from environment variable
    connectionString: process.env.DATABASE_URL, // Accessing the DATABASE_URL from .env

    ssl: {
        rejectUnauthorized: false   // Required for secure connections, e.g., on platforms like Render
    }
});

// Connect to the database and check for errors
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to PostgreSQL Database.');

    // Release the client back to the pool after use
    release();
});

module.exports = pool;
