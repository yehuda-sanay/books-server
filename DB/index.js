const mongoose= require('mongoose');

mongoose.connect(process.env.STRING_CONNCTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{console.log('all good')})
    .catch((error)=>{console.log(error)});

    module.exports=mongoose.connection