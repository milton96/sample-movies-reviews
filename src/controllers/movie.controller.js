const movieController = {};
const Movie = require('../models/Movie');

movieController.indexMovies = () => {
    return Movie.find({ posters: { $exists: true } }).limit(5);
}


module.exports = movieController;