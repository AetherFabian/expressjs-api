import { Router } from "express";
import { methods as storeController} from "../controllers/store.controller";

const router = Router();


router.get("/order/:id", storeController.getOrder);
router.get("/inventory", storeController.getInventory);
router.post("/order", storeController.postOrder);
router.delete("/order/:id", storeController.deleteOrder);


export default router;