import * as depositoServices from "../services/deposito.service.js";

export const getDepositos = (req, res) => {
  depositoServices
    .getDepositos()
    .then((result) => {    
      res.status(200).json({
        message: "Depositos retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getDeposito = (req, res) => {
  const { id } = req.params;
  depositoServices
    .getDeposito(id)
    .then((result) => {
      res.status(200).json({
        message: "Deposito retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createDeposito = (req, res) => {
  const depo = req.body;
  depositoServices
    .createDeposito(depo)
    .then(() => {
      res.status(200).json({
        message: "Deposito created successfully",
        data: deposito,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const updateDeposito = (req, res) => {
  const deposito = req.body;
  const { id } = req.params;
  depositoServices
    .updateDeposito(id, deposito)
    .then(() => {
      res.status(200).json({
        message: "Country updated successfully",
        data: country,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const deleteDeposito = (req, res) => {
  const { id } = req.params;
  depositoServices
    .deleteDeposito(id)
    .then(() => {
      res.status(200).json({
        message: "Deposito deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
