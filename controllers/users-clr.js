const usersModel = require("../models/users-model");
const bcrypt = require("bcryptjs");
const { secretKey } = require("../config/keys");
const register = (req, res) => {
  bcrypt
    .genSalt(10)
    .then((salt) => {
      bcrypt
        .hash(req.body.user.password, salt)
        .then(async (hashPassword) => {
          req.body.user.password = hashPassword;
          await usersModel
            .insertMany(req.body.user)
            .then(() => res.send("success"))
            .catch((error) => {
              res.send({ message: error });
            });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

// const logIn=(req,res) => {
//     usersModel.findOne(req.body.user.eMail)
//     return user &&
// }





module.exports = {register};
