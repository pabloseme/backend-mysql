import * as gamesServices from "../services/games.service.js";

export const getGames = (req, res) => {
    gamesServices
    .getGames()
    .then((result) => {    
      res.status(200).json({
        message: "Games retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getGame = (req, res) => {
  const { id } = req.params;
  gamesServices
    .getGame(id)
    .then((result) => {
      res.status(200).json({
        message: "Games retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createGame = (req, res) => {
  const game = req.body;
  gamesServices
    .createGame(game)
    .then(() => {
      res.status(200).json({
        message: "Game created successfully",
        data: games,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const updateGame = (req, res) => {
  const video = req.body;
  const { id } = req.params;
  gamesServices
    .updateGame(id, video)
    .then(() => {
      res.status(200).json({
        message: "Game updated successfully",
        data: game,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const deleteGame = (req, res) => {
  const { id } = req.params;
  gamesServices
    .deleteGame(id)
    .then(() => {
      res.status(200).json({
        message: "Game deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
