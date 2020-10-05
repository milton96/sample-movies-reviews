const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Account = require('../models/Account');

passport.use('mongo', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    // Comprobar si el correo existe en la base de datos
    const user = await Account.findOne({ email });
    if (!user) {
        return done(null, false, { message: 'El usuario no existe.' });
    } else {
        // Comprobar contraseñas
        const match = await user.matchpassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Contraseña incorrecta.' });
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});