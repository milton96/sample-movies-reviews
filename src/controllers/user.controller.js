const userController = {};
const passport = require('passport');
const Account = require('../models/Account');
let title = "Usuario";

userController.renderLoginForm = (req, res) => {
    res.render('users/login', { title: "Iniciar sesión" });
};

userController.renderRegistrarseForm = (req, res) => {
    res.render('users/registrarse', { title: "Registrarse" });
};

userController.renderPanel = async (req, res) => {
    const user = await Account.findById(req.user._id).lean();
    const options = {
        usuario: user,
        title: "Panel de control"
    }
    res.render('users/panel', options);
}

userController.registrarse = async (req, res) => {
    title = "Registrarse";
    let errores = [];    
    const { usuario, correo, password, confirmPassword } = req.body;

    if (password != confirmPassword) {
        errores.push("Las contraseñas no coinciden.");
        res.render('users/registrarse', { errores, title, usuario, correo });
    } else {
        const account = await Account.findOne({ email: correo });
        if (account) {
            errores.push("Este correo ya se encuentra registrado.");
            res.render('users/registrarse', { errores, title, usuario });
        } else {
            try {
                const newAccount = new Account({name: usuario, email: correo, password});
                newAccount.password = await newAccount.encryptPassword(password);
                await newAccount.save();
                res.redirect('/login');
            } catch (error) {
                error.description = "Ha ocurrido un error al hacer el registro.";
                error.code = "505";
                res.render('error', error);
            }
        }
    }
}

userController.login = passport.authenticate('mongo', {
    failureRedirect: '/login',
    successRedirect: '/panel',
    failureFlash: false
});

userController.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
}

module.exports = userController;