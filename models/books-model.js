const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    title: {type: String , required:true},
    numberOfPages: {type: Number, required:true},
    outoe: {type: String, required:true},
    year : {type: Number, required:true}
},
{
    timeseries: true
}
)
const BooksModal= mongoose.model('books', BooksSchema)
module.exports = BooksModal;