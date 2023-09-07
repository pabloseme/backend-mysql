import * as interdepServices from "../services/interdep.service.js";

export const getinterdep = (req, res) => {
    marcasServices
    .getMarcas()
    .then((result) => {    
      res.status(200).json({
        message: "Marcas retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getinter = (req, res) => {
  const { id } = req.params;
  marcasServices
    .getMarca(id)
    .then((result) => {
      res.status(200).json({
        message: "Country retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createinterdep = (req, res) => {
  const country = req.body;
  marcasServices
    .createMarca(country)
    .then(() => {
      res.status(200).json({
        message: "Country created successfully",
        data: country,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const updateinterdep = (req, res) => {
  const country = req.body;
  const { id } = req.params;
  marcasServicess
    .updateMarca(id, country)
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

export const deleteMarca = (req, res) => {
  const { id } = req.params;
  marcasServices
    .deleteMarca(id)
    .then(() => {
      res.status(200).json({
        message: "Country deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
