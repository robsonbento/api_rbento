const TarefaModel = require('../model/TarefaModel');
const { startOfDay, endOfDay, startOfWeek, endOfWeek, 
    startOfMonth, endOfMonth, startOfYear, endOfYear } = require('date-fns');

const dataAtual = new Date();

class TarefaController {
    async create(req, res){
        const tarefa = new TarefaModel(req.body);
        await tarefa
        .save()
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async update(req, res){
        await TarefaModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new:true})
        .then(reponder=>{
            return res.status(200).json(reponder);
        })
        .catch(error=>{
            return res.status(500).json(error);
        });
    }
    async tudo(req, res){
        await TarefaModel.find({macaddress: {'$in': req.params.macaddress}})
        .sort('data')
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async show(req, res){
        await TarefaModel.findById(req.params.id)
        .then(resposta => {
            if(resposta)
            return res.status(200).json(resposta);
            else 
            return res.status(404).json({error:'tarefa não encontrada'});
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async delete(req, res){
        await TarefaModel.deleteOne({'_id': req.params.id})
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async concluido(req, res){
        await TarefaModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'concluido': req.params.concluido},
            {new: true})
            .then(resposta => {
                return res.status(200).json(resposta);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
    async pendente(req, res){
        await TarefaModel.find({
            'data': {'$lt': dataAtual},
            'macaddress':{'$in': req.params.macaddress}
        })
        .sort('when')
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async dodia(req, res){
        await TarefaModel.find({
            'macaddress':{'$in': req.params.macaddress},
            'data': {'$gte': startOfDay(dataAtual), '$lte': endOfDay(dataAtual)},
        })
        .sort('when')
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async daSemana(req, res){
        await TarefaModel.find({
            'macaddress':{'$in': req.params.macaddress},
            'data': {'$gte': startOfWeek(dataAtual), '$lte': endOfWeek(dataAtual)},
        })
        .sort('when')
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async doMes(req, res){
        await TarefaModel.find({
            'macaddress':{'$in': req.params.macaddress},
            'data': {'$gte': startOfMonth(dataAtual), '$lte': endOfMonth(dataAtual)},
        })
        .sort('when')
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async doAno(req, res){
        await TarefaModel.find({
            'macaddress':{'$in': req.params.macaddress},
            'data': {'$gte': startOfYear(dataAtual), '$lte': endOfYear(dataAtual)},
        })
        .sort('when')
        .then(resposta => {
            return res.status(200).json(resposta);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
}
module.exports = new TarefaController();