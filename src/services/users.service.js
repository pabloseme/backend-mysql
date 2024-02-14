import db from "../config/db.js";

export const getUsers = (usu) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios where usuario=? and clave=?";
    
    const { username, password } = usu; 


    db.execute(query, [username,password])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE codigo = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};


/*export const createUsers = (deposito) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO depositos (codigo, nombre,stockactiv) VALUES (?, ?,?)";

    const { codigo, nombre,stockactiv } = deposito;

    db.execute(query, [codigo, nombre,stockactiv])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateUsers = (id, deposito) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE depositos SET nombre = ? WHERE codigo = ?";

      const { codigo, nombre } = deposito;

    db.execute(query, [nombre, codigo])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};*/

