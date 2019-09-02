const compose = require('compose-middleware').compose;
const{notFound , errorHandler , requestLoggerMiddleware} = require('./middlewares.js');

const middleware = compose([
  notFound,
  errorHandler,
  requestLoggerMiddleware
]);

module.exports = {middleware};

