const app = require('./src/server');

const PORT = app.get('port');

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});