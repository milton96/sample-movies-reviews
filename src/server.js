const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const favicon = require('serve-favicon');
const passport = require('passport');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');
const session = require('express-session');

// Inicializaciones
const app = express();
require('./config/passport.config');

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
    defaultLayout: "main",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const MongoStore = connectMongo(session);
app.use(
    session({
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        }),
        secret: "123456asdfghjbvnmiy87",
        resave: true,
        saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Variables globales

// Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/user.routes'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

module.exports = app;