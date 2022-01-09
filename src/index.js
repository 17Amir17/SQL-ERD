const express = require('express');
const { port } = require('./config/index');
const errorHandler = require('./middleware/errorHandler');
const getRouter = require('./routers/getRouter');
const { connect } = require('./db/index');

//Connect to db
connect().then(
  () => console.log('Connected!'),
  (err) => console.error(err)
);

//Express app
const app = express();

app.use('/', getRouter);

app.use(errorHandler);

app.listen(port, () => {
  `Listening on ${port}!`;
});
