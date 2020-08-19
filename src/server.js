const express = require('express');
const path = require('path');

// Inicializaciones
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares

// Variables globales

// Rutas

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;