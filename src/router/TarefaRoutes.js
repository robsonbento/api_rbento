const express = require('express');
const router = express.Router();

const TarefaController = require('../controller/TarefaController');
const TarefaValidacao = require('../middlewares/TarefaValidacao');

router.post('/', TarefaValidacao, TarefaController.create);
router.put('/:id', TarefaValidacao, TarefaController.update);
router.put('/:id/:concluido', TarefaController.concluido);
router.get('/:id', TarefaController.show); //mostrar a tarefa de acordo com o id

// Filtrar tarefas por codigo "macaddress" do celular
router.get('/filter/tudo/:macaddress', TarefaController.tudo);
router.get('/filter/pendente/:macaddress', TarefaController.pendente);
router.get('/filter/dodia/:macaddress', TarefaController.dodia);
router.get('/filter/dasemana/:macaddress', TarefaController.daSemana);
router.get('/filter/domes/:macaddress', TarefaController.doMes);
router.get('/filter/doano/:macaddress', TarefaController.doAno);

router.delete('/:id', TarefaController.delete);



module.exports = router;