const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

helpers.isUnauthenticated = (req, res, next) => {
    if (req.isUnauthenticated()) {
        return next();
    }
    res.redirect('/panel');
}

module.exports = helpers;