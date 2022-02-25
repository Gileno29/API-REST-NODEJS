const custonExpress = require('./config/custonExpress')
const app = custonExpress()
const conexao= require('./infraestrutura/conexao')



conexao.connect(erro=>{
        if(erro){
            console.log(erro)
        }else{
            console.log('conectado')
            app.listen(3000, () => console.log('servidor rodando na porta 3000'))
        }
    })


//req --> o que foi enviado para a  gente
//res --> nossa resposta para quem requisitou
