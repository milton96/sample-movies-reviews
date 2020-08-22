const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/testing', (req, res) => {
    const pelis = [
        {
            "name": "primera",
            "desc": "primera pelicula"
        },
        {
            "name": "segunda",
            "desc": "segunda pelicula"
        },
        {
            "name": "tercera",
            "desc": "tercera pelicula"
        }];
    const ciudad = {
        "nombre": "aguascalienes",
        "poblacion": 100
    };
    res.render('testing', { "peliculas": pelis, "city": ciudad });
});

module.exports = router;