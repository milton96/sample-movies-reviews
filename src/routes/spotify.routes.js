const { Router } = require("express");
const router = Router();
const { login, callback, basePage, search, addQueue2 } = require('../controllers/spotify.controller');
const { isAuthenticated } = require('../helpers/auth');

router.get('/', isAuthenticated, (req, res) => {
    res.redirect('spotify/configuracion');
})

router.get('/configuracion', isAuthenticated, basePage);

router.get('/login', isAuthenticated, login);

router.get('/callback', isAuthenticated, callback);

router.get('/search', isAuthenticated, search);

router.get('/add', isAuthenticated, addQueue2);

module.exports = router;