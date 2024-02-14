import * as usersServices from "../services/users.service.js";

export const getUsers = (req, res) => {
    
    const usu = req.body;
    console.log(usu, "asdasdasdasdsa")

    usersServices
    .getUsers(usu)
    .then((result) => {    
      res.status(200).json({
        message: "Users retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

