import db from "../config/db.js";

export const getDepositos = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM depositos";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getDeposito = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM depositos WHERE codigo = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createDeposito = (deposito) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO depositos (codigo, nombre,stockactiv) VALUES (?, ?,?)";

    const { codigo, nombre,stockactiv } = deposito;

    db.execute(query, [codigo, nombre,stockactiv])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateDeposito = (id, deposito) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE depositos SET nombre = ? WHERE codigo = ?";

      const { codigo, nombre } = deposito;

    db.execute(query, [nombre, codigo])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deleteDeposito = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "DELETE FROM depositos codigo = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
