const { conn } = require("../config/db");

const index = (req, res) => {
  const query = "SELECT * FROM movies";

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const movies = data.map((movie) => ({
      title: movie.title,
      year: movie.year,
      created_at: movie.created_at,
      updated_at: movie.updated_at,
    }));

    return res.status(200).json({
      status: true,
      message: "Success get all movie",
      movies,
    });
  });
};

const store = (req, res) => {
  let { title, year } = req.body;

  const query = `INSERT INTO movies (title, year, created_at, updated_at) VALUES ('${title}', ${year}, NOW(), NOW())`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  return res.status(201).json({
    status: true,
    message: "Success create movie",
  });
};

const show = (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM movies WHERE id=${id}`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: true,
      message: "Success get movie",
      movie: data,
    });
  });
};

const update = (req, res) => {
  const { title, year } = req.body;
  const { id } = req.params;

  const query = `UPDATE movies SET title='${title}', year=${year}, created_at=NOW(), updated_at=NOW() WHERE id=${id}`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: true,
      message: "Success update movie",
    });
  });
};

const destory = (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM movies WHERE id=${id}`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: true,
      message: "Success delete movie",
    });
  });
};

module.exports = {
  index,
  store,
  show,
  update,
  destory,
};
