const express = require("express");
const { Pool } = require("pg");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

const pool = new Pool({

  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});


app.get('/', (req, res) => {
  res.send('Welcome! The app is running. Go to /health to check DB and internet connectivity');
});

app.get("/health", async (req, res) => {
  try {
    // Check DB connection
    await pool.query("SELECT 1");
    // Try external fetch (fails if no internet)
    await fetch("https://www.google.com");
    res.send("OK - Database connected and internet access");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
