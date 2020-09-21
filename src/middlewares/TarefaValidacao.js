const TarefaModel = require('../model/TarefaModel');
const { isPast, isFuture } = require('date-fns');

const TarefaValidacao = async(req, res, proximo) => {
    const{macaddress, type, nome, placa, modelo, descricao, dataEntrada} = req.body;
    
    // if(!macaddress)
    // return res.status(400).json({error:'macaddress é obrigatorio!'});
    
    // else if(!type)
    // return res.status(400).json({error:'Tipo é obrigatorio!'});

    // else if(!nome)
    // return res.status(400).json({error:'Nome é obrigatorio!'});
    
    if(!placa)
    return res.status(400).json({error:'Placa é obrigatorio!'});

    // else if(!modelo)
    // return res.status(400).json({error:'Modelo é obrigatorio!'});
    
    else if(isFuture(new Date(dataEntrada))) // usuario nao pode cadastrar uma data do futuro
    return res.status(400).json({error:'Data não pode ser do Futuro!'});
    
    else{
    let existe;
    if(req.params.id){
        existe = await TarefaModel.findOne({
            '_id': {'$ne': req.params.id},
            'data':{'$eq':new Date(dataEntrada)},
            'macaddress':{'$in':macaddress}
        });

    }else{
    existe = await TarefaModel.findOne({
        'data':{'$eq':new Date(dataEntrada)},
        'macaddress':{'$in':macaddress}
    });
}

    if(existe){
        return res.status(400).json({error:'já existe um agendamento nesta data!'})
    }
    proximo();
    }
}
module.exports = TarefaValidacao;