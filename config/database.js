let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tabeer:Tabeer@123@cluster0.ycnbnuv.mongodb.net/UMTVIRTUALTOUR?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

let db = mongoose.connection;

db.on('connected', () => console.log(`MongoDB running on ${db.host}:${db.port}`));

module.exports = mongoose;