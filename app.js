const Server=require('./models/Server.js');



require('dotenv').config();
// var createError = require('http-errors');

// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


const server= new Server();

server.startServer();

// var connection= require('./database.js')

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

