const { Router } = require('express');

const controleClientes = require('./controladores/clientes');
const controleAnimais = require("./controladores/animais");

const rotas = new Router();

rotas.route('/clientes')
     .get(controleClientes.getClientes)
     .post(controleClientes.addCliente)
     .put(controleClientes.updateCliente)

rotas.route('/clientes/:codigo')
     .get(controleClientes.getClientePorCodigo)
     .delete(controleClientes.deleteCliente)

rotas.route('/animais')
     .get(controleAnimais.getAnimais)
     .post(controleAnimais.addAnimal)
     .put(controleAnimais.updateAnimal)
  
  rotas.route('/animais/:codigo')
     .get(controleAnimais.getAnimalPorCodigo)
     .delete(controleAnimais.deleteAnimal)

module.exports = rotas;