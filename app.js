// const session = require("express-session");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dbConfig = require('./configs/mysql.config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(dbConfig);

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

var port = process.env.PORT || '3001';

//syncing our sequlize models and then starting our express app
// models.sequelize.sync({ force: false }).then(() => {
  // console.log('Nice! Database looks fine')
  app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
// }).catch((err) => {
  // console.log(err, "Something went wrong with the Database update!")
// });

module.exports = app;