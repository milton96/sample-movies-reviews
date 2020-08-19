const mongoose = require('mongoose');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(db => {
    console.log(`Conexión establecida a ${db.connection.host}`);
}).catch(err => {
    console.error(err);
});