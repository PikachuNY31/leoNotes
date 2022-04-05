// boilerplate for creating a session and verifying a session
// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// //Use jwts to create a cookie using the user

// const sessionController = {};

// // Create a JWT cookie using the user from GitHub Oauth
// sessionController.createSession = async (req, res, next) => {
//   try {
//     console.log('Session created successfully');
//     // console.log(res.locals.profile)
//     const { login } = res.locals.profile;
//     const token = jwt.sign({ username: login }, process.env.JWT_SECRET);
//     res.cookie('user', token, {
//       // domain: 'http://localhost:3000',
//       httpOnly: true,
//     });
//     return next();
//   } catch (err) {
//     return next({
//       log: `Error in sessionController.createSession Err: ${err.message}`,
//       status: 500,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

// // Decodes the cookie and assigns the user to res.locals.username
// sessionController.verifySession = async (req, res, next) => {
//   // console.log(req.cookies.user) // This definitely exists when running server on its own
//   try {
//     // console.log(req.cookies.user)
//     if (req.cookies.user) {
//       const decoded = jwt.verify(req.cookies.user, process.env.JWT_SECRET);
//       res.locals.username = decoded.username;
//       // console.log('User cookie decoded and saved to res.locals.username as ' + res.locals.username)
//     }
//     return next();
//   } catch (err) {
//     return next({
//       log: `Error in sessionController.verifySession Err: ${err.message}`,
//       status: 500,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

// module.exports = sessionController;
