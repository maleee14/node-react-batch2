const express = require("express");
const { router } = require("./src/routes/main");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);
});
