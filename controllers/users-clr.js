const UserSchema = require('../models/users-model');
const bcrypt = require("bcryptjs");
const { secretKey } = require("../config/keys");
const jwt=require('jsonwebtoken')
const register = (req, res) => {
  bcrypt
    .genSalt(10)
    .then((salt) => {
      bcrypt
        .hash(req.body.user.password, salt)
        .then(async (hashPassword) => {
          req.body.user.password = hashPassword;
          await UserSchema
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

const logIn= async (req,res) => {
    await UserSchema.findOne({email:req.body.user.email})
    .then(user=>{
      bcrypt.compare(req.body.user.password,user.password)
      .then(isMatch=>{
        if(isMatch){
          const payload={
            id:user.id,
            name:user.name,
            email:user.email,
          }
          jwt.sing(payload,secretKey,{expiresIn:'3h'},(err,token)=>{
            if(err){return console.log(err);}
            return res.json({token:`Bearer ${token}`})
          })
        }
        return res.send("incorrect password")
      })
    })
    .catch(err=>console.log(err))
}

module.exports = {register,logIn};
