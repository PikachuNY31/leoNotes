// require db
const db = require('../db/db');
const notesController = {};

notesController.getAllNotes = (req, res, next) => {
  const sqlQuery = 'SELECT * FROM notes';
  db.query(sqlQuery)
    .then((data) => {
      res.locals.notes = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Cannot get notes. ERROR: ${err}`,
        message: { err: `Error occurred in notesController.getAllNotes` },
      });
    });
};

module.exports = notesController;
