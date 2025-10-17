import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import basicAuth from "../middleware/basicAuth.js";

const router = express.Router();

router.get("/", CategoryController.index);
router.post("/", basicAuth, CategoryController.store);
router.get("/:id", CategoryController.show);
router.put("/:id", basicAuth, CategoryController.update);
router.delete("/:id", basicAuth, CategoryController.destroy);

export default router;
