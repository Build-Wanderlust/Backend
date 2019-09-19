/// importing dependencies and middleware

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const server = express();

/// applying middleware 

server.use(helmet());
server.use(express.json());
server.use(cors());

/// main get endpoint

server.get('/', (req, res) => {
    res.send("Welcome to Wanderlust API")
});

module.exports = server;