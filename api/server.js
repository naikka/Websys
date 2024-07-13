const express = require('express');
const cors   = require('cors')
const bodyParser = require('body-parser');
const db = require('./db');

const server = express();
const host = 'http://localhost';
const port = 4435;

server.use(cors({
    origin: 'http://localhost:5175',
    credentials: true
}));

server.use(express.json());
server.use(bodyParser.urlencoded({extended:false}))

//GET METHOD
server.get('/users', async(req, res) => {
    const data = await db.pool.query('SELECT * FROM users', [req.body.user_id]);
    res.send(data);
});

server.listen(port, () => console.log('Database API server is now running...'));