const dotenv=require('dotenv').config()
const express= require('express');
const cors= require('cors');
const booksRouter = require('./routes/books-route');
const passport = require('passport');
require('./DB')
require('./config/passport')(passport)
const app=express();
const port= 6060;

app.use(express.json({ extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use(passport.initialize())
app.use('/books', passport.authenticate('jwt',{session:false}), booksRouter)
app.get('/',(reg, res)=>{
    res.send({massage: "success"})
})

app.listen(port, () => {
    console.log(`server listen on port: ${port}`);
})