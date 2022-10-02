const { pool } = require('../config');
const { request, response } = require("express");

const getAnimais = (request, response) => {
    pool.query(`select a.codigo as codigo, a.nome as nome, 
        a.tipo as tipo, a.idade as idade, 
        a.codigo_cliente as codigo_cliente,
        a.tipo as tipo, c.nome as nomecliente,
        t.nome as nometipo
        from animais a
        join clientes c on a.codigo_cliente = c.codigo
        join tipos t on a.tipo = t.codigo
        order by a.codigo`, 
    (error, results) => {
        if (error){
            return response.status(400).json({
                status : 'error',
                message: 'Erro ao consultar pet: ' + error
            });
        }
        response.status(200).json(results.rows);
    })
}

const addAnimal = (request, response) => {
    const {nome, idade, cliente, tipo} = request.body;
    pool.query(`insert into animais (nome, idade, codigo_cliente, tipo) 
    values ($1, $2, $3, $4)
    returning codigo, nome, idade, codigo_cliente, tipo`, 
    [nome, idade, cliente, tipo] , 
    (error, results) => {
        if (error){
            return response.status(400).json({
                status : 'error',
                message: 'Erro ao inserir pet!'
            });
        }
        response.status(200).json({
            status : 'success' , message : "Pet criado!",
            objeto : results.rows[0]
        });
    })
}

const updateAnimal = (request, response) => {
    const {codigo, nome, tipo, idade, cliente} = request.body;
    pool.query(`UPDATE animais
	SET nome=$1, idade=$2, codigo_cliente=$3, tipo=$4
	WHERE codigo=$5
returning codigo, nome, idade, codigo_cliente, tipo`, 
    [nome, idade, cliente, codigo, tipo] , 
    (error, results) => {
        if (error){
            return response.status(400).json({
                status : 'error',
                message: 'Erro ao atualizar pet!'
            });
        }
        response.status(200).json({
            status : 'success' , message : "Pet criado!",
            objeto : results.rows[0]
        });
    })
}


const deleteAnimal = (request, response) => {
    const codigo = parseInt(request.params.codigo);
    pool.query(`DELETE FROM animais WHERE codigo=$1`, 
                [codigo] , 
    (error, results) => {
        if (error || results.rowCount == 0){
            return response.status(400).json({
                status : 'error',
                message: 'Erro ao remover pet! ' + (error ? error : '')
            });
        }
        response.status(200).json({
            status : 'success' , message : "Pet removida!"
        });
    })
}

const getAnimalPorCodigo = (request, response) => {
    const codigo = parseInt(request.params.codigo);
    pool.query(`SELECT * FROM animais WHERE codigo=$1`, 
                [codigo] , 
    (error, results) => {
        if (error || results.rowCount == 0){
            return response.status(400).json({
                status : 'error',
                message: 'Erro ao recuperar pet!'
            });
        }
        response.status(200).json(results.rows[0]);
    })
}

module.exports = {
    getAnimais, addAnimal, updateAnimal, deleteAnimal, getAnimalPorCodigo
}