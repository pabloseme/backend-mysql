import * as ventasServices from "../services/ventas.service.js";

export const getVentas = (req, res) => {
    const { desde='2023-09-14',hasta='2023-09-14' } = req.params;    
    ventasServices
    .getVentas()
    .then((result) => {    
      res.status(200).json({
        message: "Ventas retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

