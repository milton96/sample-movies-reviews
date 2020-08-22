const movieController = {};
const Movie = require('../models/Movie');

movieController.indexMovies = async () => {
    return await Movie.find({ poster: { $exists: true } }).limit(5).lean();
}


module.exports = movieController;