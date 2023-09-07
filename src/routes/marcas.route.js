import { Router } from "express";

import {
  getMarcas,
  getMarca,
  createMarca,
  updateMarca,
  deleteMarca
} from "../controllers/marcas.controller.js";

const marcasRouter = Router();

marcasRouter.get("/", getMarcas);

marcasRouter.get("/:id", getMarca);

marcasRouter.post("/", createMarca);

marcasRouter.put("/:id", updateMarca);

marcasRouter.delete("/:id", deleteMarca);

export default marcasRouter;
