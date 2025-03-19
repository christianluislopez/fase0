const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure the PostgreSQL connection
const pool = new Pool({
  user: 'proyecto',
  host: 'localhost',
  database: 'proyecto0',
  password: 'proyecto',
  port: 5432,
});

// Create table if it does not exist
pool.query(`CREATE TABLE IF NOT EXISTS records (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(100),
  language VARCHAR(50),
  publication_date DATE,
  editorial_email VARCHAR(100),
  editorial_cellphone VARCHAR(20)
)`);

// Endpoint to get all records
app.get('/records', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM records ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Endpoint to add a new record
app.post('/records', async (req, res) => {
  const { title, author, language, publication_date, editorial_email, editorial_cellphone } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO records (title, author, language, publication_date, editorial_email, editorial_cellphone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, author, language, publication_date, editorial_email, editorial_cellphone]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
