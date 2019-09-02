const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const middlewares = require('./api/middlewares/index.js').middleware
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', api);

app.use(middlewares);

module.exports = app;
