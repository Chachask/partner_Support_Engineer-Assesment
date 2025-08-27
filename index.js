const express = require("express"); // imports express libraries
const { Pool } = require("pg"); //Imports the Pool class from the pg (PostgreSQL) library.
const fetch = require("node-fetch"); // makes http request

//creates an express port and sets the port
const app = express();
const port = 3000;
//pool keeps a set of open connection
const pool = new Pool({

  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

//verified that the server is running. listens for http get
app.get('/', (req, res) => {
  res.send('Welcome! The app is running. Go to /health to check DB and internet connectivity');
});

app.get("/health", async (req, res) => {
  try {
    // Check DB connection if select 1 fails throws an erro
    await pool.query("SELECT 1");
    // Try external fetch (fails if no internet)
    await fetch("https://www.google.com");
    res.send("OK - Database connected and internet access");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

//3000 server listens on
// 0.0.0.0 accessible from all networks
app.listen(3000, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
// check db settings
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
