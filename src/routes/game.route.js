import { Router } from "express";

import {
    getGames,
    getGame,
    createGame,
    updateGame,
    deleteGame
  } from "../controllers/games.controller.js";
  
  const gameRouter = Router();
  
  gameRouter.get("/", getGames);
  
  gameRouter.get("/:id", getGame);
  
  gameRouter.post("/", createGame);
  
  gameRouter.put("/:id", updateGame);
  
  gameRouter.delete("/:id", deleteGame);
  
  export default gameRouter;