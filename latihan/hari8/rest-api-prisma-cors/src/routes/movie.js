import express from "express";
import MovieController from "../controllers/MovieController.js";
import basicAuth from "../middleware/basicAuth.js";

const router = express.Router();

router.get("/", MovieController.index);
router.post("/", basicAuth, MovieController.store);
router.get("/:id", MovieController.show);
router.put("/:id", basicAuth, MovieController.update);
router.delete("/:id", basicAuth, MovieController.destroy);

export default router;
