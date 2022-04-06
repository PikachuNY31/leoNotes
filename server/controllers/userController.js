// createUser
const db = require('../db/db');
const userController = {};

// userController.authenticateUser = (req, res, next) => {

//


// Request body:
// {
//   userName: 'pikachu',
//   password: 'pokemon',
// }


// Respond with:
// {
//   createdAccount: true,
//   message: 'Example Welcome!'
// }



userController.createUser = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;

  // pay special attention to syntax requirements for making a query to the database
  const sqlQuery = `
    INSERT INTO users ("username", "password", "date_created") 
    VALUES ('${userName}', '${password}', NOW()) 
    RETURNING *`;

  db.query(sqlQuery)
    .then((data) => {
      res.locals.users = data.rows;
      console.table(data.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log: `Cannot create user. ERROR: ${err}`,
        message: { err: `Error occurred in userController.createUser` }
      });      
    });
};

module.exports = userController;
