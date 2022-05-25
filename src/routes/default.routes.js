import { Router } from "express";
import { getAPI } from "../controllers/default.controller";

const router = Router();

router.get("/", getAPI);

export default router;