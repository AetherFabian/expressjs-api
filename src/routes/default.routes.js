import { Router } from "express";
import { methods as defaultController } from "../controllers/default.controller";

const router = Router();

router.get("/", defaultController.getAPI);

export default router;