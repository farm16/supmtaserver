import express from "express";
import trainL from "../../controllers/mtaFeed/trainL.js";
const router = express.Router();

/* GET /api/mta/feed/l */
router.route("/feed/l").get(trainL.liveFeed);

export default router;
