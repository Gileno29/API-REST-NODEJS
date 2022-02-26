const conexao= require('../infraestrutura/conexao')
const moment = require('moment')
const req = require('express/lib/request')
//const res = require('express/lib/response')
class Atendimentos {
    adiciona(atendimento, res, req){
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao= moment().format('YYYY-MM-DD  HH:MM:SS')
        const data= moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD  HH:MM:SS')
        const atendimentoDatado= {...atendimento, dataCriacao, data}
        conexao.query(sql,atendimentoDatado,(err, result)=>{
            if(err){
                res.status(400).json(err)
            }else{
                res.status(201).json(result)
            }
            

        })


    }
}
module.exports= new Atendimentos