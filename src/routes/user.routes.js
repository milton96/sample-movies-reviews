const { Router } = require("express");
const router = Router();

const {
    renderLoginForm,
    renderRegistrarseForm,
    registrarse,
    login,
    renderPanel,
    logout
} = require("../controllers/user.controller");

const { isAuthenticated, isUnauthenticated } = require('../helpers/auth');

router.get('/login', isUnauthenticated, renderLoginForm);
router.post('/login', isUnauthenticated, login);
router.get('/registrarse', renderRegistrarseForm);
router.post('/registrarse', registrarse);
router.get('/panel', isAuthenticated, renderPanel);
router.get('/logout', logout);

module.exports = router;