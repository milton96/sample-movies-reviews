const moongose = require('mongoose');
const movieController = {};
const Movie = require("../models/Movie");

movieController.indexMovies = async () => {
    return await Movie.find({ poster: { $exists: true } })
        .limit(50)
        .lean();
};

movieController.getMovie = async (movieId) => {
    return await Movie.find({ _id: moongose.Types.ObjectId(movieId) });
};

module.exports = movieController;
