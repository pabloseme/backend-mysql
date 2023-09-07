import { Router } from "express";

import {
    getClientes,
    getCliente
  } from "../controllers/clientes.controller.js";
  
  const clienteRouter = Router();
  
  clienteRouter.get("/", getClientes);
  
  clienteRouter.get("/:id", getCliente);
  
  //clienteRouter.post("/", createDeposito);
  
  //clienteRouter.put("/:id", updateDeposito);
  
  //clienteRouter.delete("/:id", deleteDeposito);
  
  export default clienteRouter;
  