const conexao= require('../infraestrutura/conexao')
const moment = require('moment')
class Atendimentos {
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao= moment().format('YYYY-MM-DD  HH:MM:SS')
        const data= moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD  HH:MM:SS')
        const atendimentoDatado= {...atendimento, dataCriacao, data}
        conexao.query(sql,atendimentoDatado,(err, result)=>{
            if(err){
                console.log('esse é o meu erro', err)
            }else{
                console.log(result)
            }
            

        })


    }
}
module.exports= new Atendimentos