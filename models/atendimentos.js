const conexao= require('../infraestrutura/conexao')
const moment = require('moment')
const req = require('express/lib/request')
//const res = require('express/lib/response')
class Atendimentos {
    adiciona(atendimento, res, req){
        

        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao= moment().format('YYYY-MM-DD  HH:MM:SS')
        const data= moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD  HH:MM:SS')
        const dataEhValida= moment(data).isSameOrAfter()
        const clienteEhValido= atendimento.cliente.length()>= 5
        const validacao=[
            
            { }
        
        ]


        if (!dataEhValida){
            res.send('data é invalida, não é possivel cadastrar uma para um periodo anterior ao atual')

        }else if(!clienteEhValido){
            res.send('cliente é invalido, o nome é muito curto')

        }else{
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
}
module.exports= new Atendimentos