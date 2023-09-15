import db from "../config/db.js";

export const getVentas = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM operacion where fecha>=? and fecha<=?";


    db.execute(query, [desde,hasta])
    .then((result) => resolve(result))
    .catch((err) => reject(err));
});

    
};




