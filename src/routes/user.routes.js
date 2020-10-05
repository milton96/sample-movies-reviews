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

router.get('/login', renderLoginForm);
router.post('/login', login);
router.get('/registrarse', renderRegistrarseForm);
router.post('/registrarse', registrarse);
router.get('/panel', renderPanel);
router.get('/logout', logout);

module.exports = router;