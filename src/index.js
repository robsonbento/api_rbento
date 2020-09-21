const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

server.get('/', function(req, res){
    res.send('Ola Robson Bento! API esta Online..')

})

// ----------------------------------

server.use(express.json());
const TarefaRoutes = require('./router/TarefaRoutes');
server.use('/eventos', TarefaRoutes);

server.listen(3333, ()=>{
    console.log('API Online');
})