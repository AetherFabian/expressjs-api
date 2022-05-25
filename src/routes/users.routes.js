import { Router } from "express";
import { methods as usersController} from "../controllers/users.controller";

const router = Router();

// routes to user
router.get("/:username", usersController.getUser);
router.post("/", usersController.postUser);
router.put("/:username", usersController.putUser);
router.delete("/:username", usersController.deleteUser);

export default router;