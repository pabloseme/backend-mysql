import * as clientesServices from "../services/clientes.service.js";

export const getClientes = (req, res) => {
    clientesServices
    .getClientes()
    .then((result) => {    
      res.status(200).json({
        message: "Clientes retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getCliente = (req, res) => {
  const { id } = req.params;
  clientesServices
    .getCliente(id)
    .then((result) => {
      res.status(200).json({
        message: "Clientes retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


