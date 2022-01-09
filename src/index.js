const express = require('express');
const { port } = require('./config/index');
const errorHandler = require('./middleware/errorHandler');
const getRouter = require('./routers/getRouter');
const postRouter = require('./routers/postRouter');
const putRouter = require('./routers/putRouter');
const { connect } = require('./db/index');

//Connect to db
connect().then(
  () => console.log('Connected!'),
  (err) => console.error(err)
);

//Express app
const app = express();
app.use(express.json());
app.use('/', getRouter);
app.use('/new', postRouter);
app.use('/update', putRouter);

app.use(errorHandler);

app.listen(port, () => {
  `Listening on ${port}!`;
});
