// server boilerplate will go here
const express = require('express');

const app = express();

const path = require('path');

const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');
const notesController = require('./controllers/notesController');

// app.use();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// require routers

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/notes', notesController.getAllNotes, (req, res) => {
  res.send(res.locals.notes);
});

app.get('/user/login', userController.authenticateUser, (req, res) => {
  console.log(res.locals.isAuthenticated);
  res.status(200).json({
    isAuthenticated: res.locals.isAuthenticated,
  });
});

app.post('/user/signup', userController.createUser, (req, res) => {
  const newUser = {
    createdAccount: true,
    message: 'Example Welcome!',
  };
  res.status(200).json(newUser);
});

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log('================================ \n');
  console.log(`SERVER RUNNING ON PORT: ${PORT}`);
  console.log(' \n================================');
});
