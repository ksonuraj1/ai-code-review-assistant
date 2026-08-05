import { Router } from "express";
import { reviewCode } from "../controllers/review.controller";

const router = Router();

router.post("/", reviewCode);

export default router;
