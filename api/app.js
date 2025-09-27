if (process.env.NODE_ENV !== 'production') 
require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
console.log("ENV", process.env);
// view engine setup
// ...existing code...
app.set('views', path.join(__dirname, 'views'));
// ...existing code...
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// her oluşturduğumuz route için app.use ile middleware olarak ekliyoruz.
app.use('/api',  require("./routes/index")); // http://localhost:3000/ isteği gelince indexRouter'ı kullan
//app.use('/users', usersRouter); // http://localhost:3000/users isteği gelince usersRouter'ı kullan
// app.use('/auditlogs', require('./routes/auditlogs')); // http://localhost:3000/auditlogs isteği gelince auditlogs.js dosyasını kullan  
// yukarıda ki kullanım yerine roulesde oluşturulan herhangi bir route yapısı tanımlanırsa bunu direkt ismiyle endpoint haline getirip kullanacak
// yapıya getirecek bir dinamil route yapısı kurucaz.



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
