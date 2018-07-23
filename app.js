const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || '3001';
const createError = require('http-errors');
const app = express();
const passport = require('passport');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const flash = require("connect-flash");
const logger = require('morgan');
// const dbConfig = require('./configs/mysql.config');
const db = require("./models");
const path = require('path');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(dbConfig);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirnam + 'public/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

// Passport
app.use(session({secret: 'helloworld', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Models for Syncing with Passport
require("./routes/auth.js")(app, passport);

//Routes
require("./routes/users.js")(app);

//syncing our sequlize models and then starting our express app
db.sequelize.sync().then(() => {
  console.log('Nice! Database looks fine')
  app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
}).catch((err) => {
  console.log(err, "Something went wrong with the Database update!")
});

module.exports = app;