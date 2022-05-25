import { Router } from "express";
import { methods as petsController} from "../controllers/pets.controller";

const router = Router();


router.get("/", petsController.getPets);
router.get("/:id", petsController.getPet);
router.get("/findByStatus", petsController.getPetByStatus);
router.post("/", petsController.postPet);
router.post("/:id/uploadImage", petsController.postImagePet);
router.put("/:id", petsController.putPet);
router.delete("/:id", petsController.deletePet);


export default router;