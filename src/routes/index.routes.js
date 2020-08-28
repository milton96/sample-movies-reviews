const { Router } = require("express");
const router = Router();
const movie = require("../controllers/movie.controller");
const title = 'Reseñas películas';

router.get("/", async (req, res) => {
  const ITEMS = 3;
  try {
    let movies = await movie.indexMovies();
    res.render("index", { movies, title });
  } catch (error) {
    error.code = 500;
    error.description = "Error al obtener los datos";
    res.render("error", { error });
  }
});

router.get('/p/:movieId', async (req, res) => {
  try {
    let p = await movie.getMovie(req.params.movieId);
    res.render('movie', { p, title: p.title });
  } catch (error) {
    error.code = 500;
    error.description = "Error al obtener los datos";
    res.render("error", { error });
  }
})

router.get("/testing", (req, res) => {
  const pelis = [
    {
      name: "primera",
      desc: "primera pelicula",
    },
    {
      name: "segunda",
      desc: "segunda pelicula",
    },
    {
      name: "tercera",
      desc: "tercera pelicula",
    },
  ];
  const ciudad = {
    nombre: "aguascalienes",
    poblacion: 100,
  };
  res.render("testing", { peliculas: pelis, city: ciudad });
});

module.exports = router;
