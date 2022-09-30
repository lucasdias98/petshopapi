const { Router } = require('express');

const controleClientes = require('./controladores/clientes');

const rotas = new Router();

rotas.route('/clientes')
     .get(controleClientes.getClientes)
     .post(controleClientes.addCliente)
     .put(controleClientes.updateCliente)

rotas.route('/clientes/:codigo')
     .get(controleClientes.getClientePorCodigo)
     .delete(controleClientes.deleteCliente)

module.exports = rotas;