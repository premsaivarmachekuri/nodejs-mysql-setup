import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'biab-mysql',
  port: '3306',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});


// Rest of your code...

  
// Test the database connection
pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection when done
  })
  .catch((error) => {
    console.error('Error connecting to MySQL:', error);
  });

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}`);
});

