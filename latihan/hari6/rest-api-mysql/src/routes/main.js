const express = require("express");
const { getMovies, getMovieById } = require("../controllers/MovieController");

const router = express.Router();

router.get("/movie", getMovies);
router.get("/movie/:id", getMovieById);

module.exports = {
  router,
};
