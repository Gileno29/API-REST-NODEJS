const conexao= require('../infraestrutura/conexao')
class Atendimentos {
    adiciona(atendimento){
        this.sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(this.sql,atendimento,(err, result)=>{
            if(err){
                console.log('esse é o meu erro', err)
            }else{
                console.log(result)
            }
            

        })


    }
}
module.exports= new Atendimentos