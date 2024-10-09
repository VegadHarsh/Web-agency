const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Create a connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost', // Change if you're using an external DB
    user: 'root',      // Your MySQL username
    password: 'password',  // Your MySQL password
    database: 'my_database' // Your MySQL database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// Example route to get data from MySQL
app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM my_table';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
});

// Example route to post data to MySQL
app.post('/api/data', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO my_table (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ success: true, message: 'Data inserted successfully', data: result });
    });
});

// Start the Express server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
