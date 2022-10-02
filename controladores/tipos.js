const {pool} = require('../config');
const {request, response} = require('express');

const getTipos = (request, response) => {
    pool.query('SELECT * FROM tipos order by codigo',
        (error, results) => {
            if (error){
                return response.status(400).json(
                    {
                        status : 'error', 
                        message : 'Erro ao consultar o tipo: ' + error
                    }
                );
            }
            response.status(200).json(results.rows);
        }       
    )
}


const addTipo = (request, response) => {
    const {nome} = request.body;
    pool.query(`INSERT INTO tipos (nome) 
    values ($1) returning codigo, nome`,
    [nome],
    (error, results) => {
        if (error){
            return response.status(400).json({
                status : 'error', 
                message : 'Erro ao inserir o tipo: ' + error
            })
        }
        response.status(200).json({
            status : "success" , message : "Tipo criado",
            objeto: results.rows[0]
        })
    })
}

const updateTipo = (request, response) => {
    const {codigo, nome} = request.body;
    pool.query(`UPDATE tipos SET nome=$1
    where codigo=$2 returning codigo, nome`,
    [nome, codigo],
    (error, results) => {
        if (error){
            return response.status(400).json({
                status : 'error', 
                message : 'Erro ao alterar o tipo: ' + error
            })
        }
        response.status(200).json({
            status : "success" , message : "Tipo alterado",
            objeto: results.rows[0]
        })
    })
}

const deleteTipo = (request, response) => {
    const codigo = parseInt(request.params.codigo);
    pool.query(`DELETE FROM tipos WHERE codigo = $1`,
    [codigo],
    (error, results) => {
        if (error || results.rowCount == 0){
            return response.status(400).json({
                status : 'error', 
                message : 'Erro ao remover o tipo: ' + 
                (error ? error :'Não removeu nenhuma linha')
            })
        }
        response.status(200).json({
            status : "success" , message : "Tipo removido"
        })
    })
}

const getTipoPorCodigo = (request, response) => {
    const codigo = parseInt(request.params.codigo);
    pool.query(`SELECT * FROM tipos WHERE codigo = $1`,
    [codigo],
    (error, results) => {
        if (error || results.rowCount == 0){
            return response.status(400).json({
                status : 'error', 
                message : 'Erro ao recuperar o tipo: ' + 
                (error ? error :'Não encontrou nenhuma linha')
            })
        }
        response.status(200).json(results.rows[0])
    })
}

module.exports = {
    getTipos, addTipo, updateTipo, deleteTipo, getTipoPorCodigo
}

