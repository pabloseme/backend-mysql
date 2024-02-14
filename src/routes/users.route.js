import { Router } from "express";

import {    
    getUsers
  } from "../controllers/users.controller.js";
  
  const userRouter = Router();
  
  userRouter.post("/", getUsers);
  
  //userRouter.get("/:id", getDeposito);
  
  //userRouter.post("/", createDeposito);
  
  //userRouter.put("/:id", updateDeposito);
  
  //userRouter.delete("/:id", deleteDeposito);
  
  export default userRouter;
  