import { Router } from "express";

import {getVentas} from "../controllers/ventas.controller.js";

const ventasRouter = Router();

ventasRouter.Router.get("/", getVentas);


export default ventasRouter;
