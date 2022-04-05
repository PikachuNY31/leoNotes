// server boilerplate will go here
const express = require('express');
const app = express();

const path = require('path');

const cookieParser = require('cookie-parser');

// app.use();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// require routers

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log('================================ \n');
  console.log(`SERVER RUNNING ON PORT: ${PORT}`);
  console.log(' \n================================');
})

