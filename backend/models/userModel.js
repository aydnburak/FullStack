const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: String,
    sifre: String
})

module.exports = mongoose.model('User', userSchema);