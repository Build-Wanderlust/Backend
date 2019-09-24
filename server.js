/// importing dependencies and middleware

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./routers/usersRouter')
const experienceRouter = require('./routers/experiencesRouter')


const server = express();

/// applying middleware 

server.use(helmet());
server.use(express.json());
server.use(cors());

/// applying endpoint routers

server.use('/api/users', userRouter);
server.use('/api/experiences', experienceRouter);

/// main get endpoint

server.get('/', (req, res) => {
    res.send("<h1>Welcome to Wanderlust API</h1>")
});

module.exports = server;