const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("Ini Adalah Halaman Home");
});

app.get("/peserta/:name", (req, res) => {
  res.send(`Halo Selamat Datang ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
