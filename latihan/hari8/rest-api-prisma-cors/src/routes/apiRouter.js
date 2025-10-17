import express from "express";
import movieRouter from "./movie.js";
import categoryRouter from "./category.js";

const router = express.Router();

router.use("/movies", movieRouter);
router.use("/categories", categoryRouter);

export default router;
