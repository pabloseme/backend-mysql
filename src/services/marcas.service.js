import db from "../config/db.js";

export const getMarcas = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM marcas";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getMarca = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM marcas WHERE codigo = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createMarca = (marca) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO marcas (codigo, nombre) VALUES (?, ?)";

    const { codigo, nombre } = marca;

    db.execute(query, [codigo, nombre])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateMarca = (id, marca) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE marcas SET nombre = ? WHERE codigo = ?";

      const { codigo, nombre } = marca;

    db.execute(query, [nombre, codigo])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deleteMarca = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "DELETE FROM marcas codigo = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
