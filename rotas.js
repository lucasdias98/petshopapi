const { Router } = require('express');

const controleClientes = require('./controladores/clientes');
const controleAnimais = require("./controladores/animais");
const controleTipos = require("./controladores/tipos");
const seguranca = require('./controladores/seguranca');

const rotas = new Router();

rotas.route("/login")
     .post(seguranca.login)

/*
rotas.route('/clientes')
     .get(seguranca.verificaJWT, controleClientes.getClientes)
     .post(seguranca.verificaJWT, controleClientes.addCliente)
     .put(seguranca.verificaJWT, controleClientes.updateCliente)

rotas.route('/clientes/:codigo')
     .get(seguranca.verificaJWT, controleClientes.getClientePorCodigo)
     .delete(seguranca.verificaJWT, controleClientes.deleteCliente)
*/

rotas.route('/clientes')
     .get(controleClientes.getClientes)
     .post(controleClientes.addCliente)
     .put(controleClientes.updateCliente)

rotas.route('/clientes/:codigo')
     .get(controleClientes.getClientePorCodigo)
     .delete(controleClientes.deleteCliente)

rotas.route('/animais')
     .get(seguranca.verificaJWT, controleAnimais.getAnimais)
     .post(seguranca.verificaJWT, controleAnimais.addAnimal)
     .put(seguranca.verificaJWT, controleAnimais.updateAnimal)
  
rotas.route('/animais/:codigo')
     .get(seguranca.verificaJWT, controleAnimais.getAnimalPorCodigo)
     .delete(seguranca.verificaJWT, controleAnimais.deleteAnimal)

rotas.route('/tipos')
     .get(seguranca.verificaJWT, controleTipos.getTipos)
     .post(seguranca.verificaJWT, controleTipos.addTipo)
     .put(seguranca.verificaJWT, controleTipos.updateTipo)

rotas.route('/tipos/:codigo')
     .get(seguranca.verificaJWT, controleTipos.getTipoPorCodigo)
     .delete(seguranca.verificaJWT, controleTipos.deleteTipo)

module.exports = rotas;