const express = require("express");
const {
  store,
  index,
  show,
  update,
  destory,
} = require("../controllers/MovieController");

const router = express.Router();

router.get("/movie", index);
router.post("/movie", store);
router.get("/movie/:id", show);
router.put("/movie/:id", update);
router.delete("/movie/:id", destory);

module.exports = {
  router,
};
