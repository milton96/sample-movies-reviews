require('dotenv').config();
const app = require('./src/server');

const PORT = app.get('port');
require('./src/database');

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});