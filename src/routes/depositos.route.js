
import { Router } from "express";

import {
    getDepositos,
    getDeposito,
    createDeposito,
    updateDeposito,
    deleteDeposito
  } from "../controllers/deposito.controller.js";
  
  const depositoRouter = Router();
  
  depositoRouter.get("/", getDepositos);
  
  depositoRouter.get("/:id", getDeposito);
  
  depositoRouter.post("/", createDeposito);
  
  depositoRouter.put("/:id", updateDeposito);
  
  depositoRouter.delete("/:id", deleteDeposito);
  
  export default depositoRouter;
  