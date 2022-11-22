const booksRouter = require('express').Router();
const {getAllBooks,creatBook,getBookByID,updateBook,deleteBook,getBookByTitle}= require('../controllers/books-clr')

booksRouter.get('/',getAllBooks)
booksRouter.get('/getBookByID/:id',getBookByID)
booksRouter.post('/creatBook',creatBook)
booksRouter.put('/updateBook/:id',updateBook)
booksRouter.delete('/deleteBook/:id',deleteBook)
booksRouter.get('/getBookByTitle/:title',getBookByTitle)

module.exports = booksRouter;