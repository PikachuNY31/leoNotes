// createUser
const db = require('../db/db');
const userController = {};

userController.authenticateUser = (req, res, next) => {
  const { username, password } = req.body;
  const queryString = `SELECT "username","password" FROM users WHERE "username"='${username}'`;
  console.log(queryString);
  db.query(queryString)
    .then((data) => {
      console.log('RETRIEVED USER:');
      res.locals.isAuthenticated = data.rows[0].password === password;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Invalid username or password. ERROR: ${err}`,
        message: { err: `Error occurred in userController.authenticateUser` },
      });
    });
};

userController.createUser = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // pay special attention to syntax requirements for making a query to the database
  const sqlQuery = `
    INSERT INTO users ("username", "password", "date_created") 
    VALUES ('${username}', '${password}', NOW()) 
    RETURNING *`;
  console.log(sqlQuery);
  db.query(sqlQuery)
    .then((data) => {
      res.locals.users = data.rows;
      console.table(data.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log: `Cannot create user. ERROR: ${err}`,
        message: { err: `Error occurred in userController.createUser` },
      });
    });
};

module.exports = userController;
