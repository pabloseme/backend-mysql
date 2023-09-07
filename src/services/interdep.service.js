import db from "../config/db.js";

export const getinterdep = (fecd,fech) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT i.*,d.* FROM interdep i left join interdeta d where i.fecha>=? and i.fecha<=?";

    db.execute(query,[fecd,fech])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getinter = (id) => {
  return new Promise((resolve, reject) => {
    const query =  "SELECT i.*,d.* FROM interdep i left join interdeta d where i.numero=?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createinterdep = (marca) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO marcas (codigo, nombre) VALUES (?, ?)";

    const { codigo, nombre } = marca;

    db.execute(query, [codigo, nombre])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateinterdep = (id, marca) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE interdep SET estado = ? WHERE codigo = ?";

      const { codigo, nombre } = marca;

    db.execute(query, [nombre, codigo])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deleteinterdep = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "DELETE FROM country marcas codigo = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
