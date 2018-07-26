require('dotenv').config();

const
  express = require('express'),
  { env: { PORT, SESSION_SECRET_LETTER } } = process,
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  validator = require('express-validator');
  session = require("express-session"),
  createError = require('http-errors'),
  passport = require('passport'),
  cookieParser = require('cookie-parser'),
  flash = require("connect-flash"),
  //  dbConfig = require('./configs/mysql.config'),
  db = require("./models"),
  app = express();
  hl = require('handy-log');
  require('./config/passport/passport.js')(passport, db.User)

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(dbConfig);

app.use(validator());

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
app.use(session({ 
  cookieName: "session",
  secret: SESSION_SECRET_LETTER, 
  resave: true, 
  saveUninitialized: true ,
  duration: 60 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Models for Syncing with Passport
require("./routes/auth-routes.js")(app, passport);

//Routes
require("./routes/user-api-routes.js")(app);
require("./routes/test-api-routes.js")(app);

//syncing our sequlize models and then starting our express app
db.sequelize.sync().then(() => {
  console.log('Nice! Database looks fine')
  app.listen(port, () => {
    console.log('Server started on port: ' + PORT);
  });
}).catch((err) => {
  console.log(err, "Something went wrong with the Database update!")
});

module.exports = app;