import { Router } from "express";

import marcasRouter from "./marcas.route.js";
import depositoRouter from "./depositos.route.js";
import clienteRouter from "./clientes.route.js";


const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
  res.send("Accediste a mi API");
});


//Rutas
indexRouter.use(`${prefix}/marcas`, marcasRouter);
indexRouter.use(`${prefix}/depositos`, depositoRouter);
indexRouter.use(`${prefix}/clientes`, clienteRouter);
indexRouter.use(`${prefix}/ventas/:desde?/:hasta?`, clienteRouter);

export default indexRouter;
