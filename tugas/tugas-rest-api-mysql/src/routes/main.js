const express = require("express");
const {
  store,
  getMasiswaByGrade,
  show,
  update,
  destory,
} = require("../controllers/NilaiController");

const router = express.Router();

router.post("/mahasiswa", store);
router.get("/mahasiswa", getMasiswaByGrade);
router.get("/mahasiswa/:id", show);
router.put("/mahasiswa/:id", update);
router.delete("/mahasiswa/:id", destory);

module.exports = { router };
