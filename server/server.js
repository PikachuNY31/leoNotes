// server boilerplate will go here
const express = require('express');

const app = express();

const path = require('path');

const cookieParser = require('cookie-parser');

const notesController = require('./controllers/notesController');

// app.use();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// require routers
app.get('/store/main', (req, res) => {
  res.status(200).json({
    notesForSale: [
      {
        noteTitle: 'Redux',
        author: 'Leo',
        description: 'This is a descriptions for the Redux notes',
        price: 2.99,
        discountPercent: 0.75,
      },
      {
        noteTitle: 'Express',
        author: 'Eric',
        description: 'This is a description for the Express notes',
        price: 2.99,
        discountPercent: 0.0,
      },
    ],
    storePrompts: ['Example Store Prompt 1', 'Example Store Prompt 2'],
  });
});

app.get('/notes', notesController.getAllNotes, (req, res) => {
  res.send(res.locals.notes);
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
