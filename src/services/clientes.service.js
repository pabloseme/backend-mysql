import db from "../config/db.js";

export const getClientes = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT codigo,nombre,domi,loca,dni,cuit,celular,telefono FROM cliente";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getCliente = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM cliente WHERE codigo = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

