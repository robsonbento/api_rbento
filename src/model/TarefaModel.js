const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const AddEvento = new Schema({
    macaddress: {type: String, required:false}, //mac address = endereço do dispositivo que esta usando o sistema
    dataEntrada: {type: Date, required:false},
    nome: {type: String, required:false},
    placa: {type: String, required:true},
    pedido: {type: String, required:false},
    valor_pedido: {type: String, required:false},
    modelo: {type: String, required:false},
    descricao: {type: String, required:false},
    type: {type: Number, required:false},
    concluido: {type: Boolean, default:false},
    cancelado: {type: Boolean, default:false},
    excluir: {type: Boolean, default:false},
    data_criado: {type: Date, default:Date.now()},

});


module.exports = mongoose.model('eventos', AddEvento);