import { Router } from "express";

import {
  getinterdep,
  getinter,
  createinterdep,
  updateinterdep,
  deleteinterdep
} from "../controllers/interdep.controller.js";

const interdepRouter = Router();

interdepRouter.get("/", getinterdep);

interdepRouter.get("/:id", getinter);

interdepRouter.post("/", createinterdep);

interdepRouter.put("/:id", updateinterdep);

interdepRouter.delete("/:id", deleteinterdep);

export default interdepRouter;
