const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

// Inicializaciones
const app = express();
// const hbs = handlebars.create({
//     defaultLayout: "main",
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'partials'),
//     extname: '.hbs',
// });

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

// Variables globales

// Rutas
app.get('/', (req, res) => {
    res.render('index');
})

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;