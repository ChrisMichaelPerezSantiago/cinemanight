const express = require('express');
const endpoints = require('./endpoints');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/', endpoints);

module.exports = router;
