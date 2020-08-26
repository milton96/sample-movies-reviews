const { Router } = require("express");
const router = Router();
const movie = require("../controllers/movie.controller");

router.get("/", async (req, res) => {
  try {
    let movies = await movie.indexMovies();
    res.render("index", { movies: movies });
  } catch (error) {
    error.code = 500;
    error.description = "Error al obtener los datos";
    res.render("error", { error });
  }
});

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
