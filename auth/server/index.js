const express = require('express');
const http = require('http');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config');

// DB Setup
mongoose.connect(config.mongoURI);

//App Setup
app.use(morgan('combined'));
app.use(express.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
