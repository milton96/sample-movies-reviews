const { Router } = require("express");
const router = Router();

const {
    renderLoginForm,
    renderRegistrarseForm,
    registrarse
} = require("../controllers/user.controller");

router.get('/login', renderLoginForm);
router.get('/registrarse', renderRegistrarseForm);
router.post('/registrarse', registrarse);

module.exports = router;