const BooksModal = require('../models/books-model');

const getAllBooks= async (req,res)=>{
    await BooksModal.find({})
    .then((books,error)=>{
        if(error) {
            return res.status(400).json({ success: false, error})
        }
        if(books.length == 0) {
            return res.json({ success:false, massage:"no data"})
        }
        res.status(200).json({success: true, books})
    })
}

const creatBook = async (req,res) => {
    await BooksModal.insertMany(req.body.book)
    .then((result) => res.status(200).json({success: true, massage: 'book added succesfuly',result}))
    .catch((error) => res.status(400).json({ success:false,error}))
}
const getBookByID = async (req,res) => {
    await BooksModal.findById(req.params.id)
    .then((book) => {if(!book){return res.status(400).json({success:false,massage:'no data'})}
    return res.status(200).json({ success: true,massage:book})})
    .catch(error => res.status(400).json({success:false,error}))
}

const updateBook = async (req,res) => {
    await BooksModal.findByIdAndUpdate(req.params.id,req.body.book)
    .then(res.status(200).json({ success:true, massage: 'book update'}))
    .catch(error => {res.status(400).json({ success: false, error})})
}
const deleteBook = async (req, res) => {
    await BooksModal.findByIdAndDelete(req.params.id)
    .then(() => {res.status(200).json({ success: true, massage: 'book deleted'})})
    .catch(error=> res.status(400).json({ success:false,error}))
}
const getBookByTitle = async (req, res) => {
    await BooksModal.findOne(req.params.title)
    .then(book=>res.status(200).json({ success:true, book}))
    .catch(error => res.status(400).json({ success:false, error}))
}



module.exports = {getAllBooks,creatBook,getBookByID,updateBook,deleteBook,getBookByTitle}