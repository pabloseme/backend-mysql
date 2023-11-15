import db from "../config/db.js";

export const getGames = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM games";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getGame = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM games WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createGame = (Game) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO games (title, descripcion,image) VALUES (?, ?,?)";

    const { title, descripcion,image } = Game;

    db.execute(query, [title, descripcion,image])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateGame = (id, Game) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE game SET title = ?,descripcion = ?,image = ? WHERE id = ?";

      const { title, descripcion,image } = Game;

    db.execute(query, [title, descripcion,image, id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deleteGame = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "DELETE FROM game id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
