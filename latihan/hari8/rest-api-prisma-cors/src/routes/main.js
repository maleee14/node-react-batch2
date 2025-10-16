import express from "express";
import MovieController from "../controllers/MovieController.js";
import basicAuth from "../middleware/basicAuth.js";

const router = express.Router();

router.get("/movie", MovieController.index);
router.post("/movie", basicAuth, MovieController.store);
router.get("/movie/:id", MovieController.show);
router.put("/movie/:id", basicAuth, MovieController.update);
router.delete("/movie/:id", basicAuth, MovieController.destroy);

export default router;
