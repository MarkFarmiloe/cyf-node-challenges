const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// const pool = new Pool({
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DB,
//     ssl: true,
//     port: 5432
// });

const pool = new Pool({
    connectionString: process.env.PG_CONNECT,
    ssl: true,
    port: 5432
});

const routes = {
    '/': 'This welcome page',
    '/locations': 'json array of locations'
};

app.get('/', (req, res) => {
    res.send(routes);
});

app.get('/locations', (req, res) => {
    const sql = "SELECT * FROM locations";
    pool.query(sql)
    .then(results => res.send(results.rows))
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
