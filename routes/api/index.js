import express from "express";
import userRoutes from "./users.js";
import mtaRoutes from "./mta.js";

const router = express.Router();

// Book routes
router.use("/users", userRoutes);
router.use("/mta", mtaRoutes);

export default router;
