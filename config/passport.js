const {mongoURI,secretKey}=require('../config/keys')
const usersModel=require('../models/users-model')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt

const option = {
    secretOrKey:secretKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const passportMidelwer=(passport)=>{
    passport.use(
    new JwtStrategy(option,(jwt_payload,done)=>{
        usersModel.findById(jwt_payload.id)
        .then((user)=>{console.log('user found');
        return done(null,false)
    })
        .catch((error)=>{console.log(error.message)
        return done(error)
        })
    })
    )
}
module.exports=passportMidelwer;