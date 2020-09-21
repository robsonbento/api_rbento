const mongoose = require('mongoose');

const url = 'mongodb+srv://benxoweb:0800577@benxodb-y5jrp.mongodb.net/rbento?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});

module.exports = mongoose;