//exporta o app como uma funcao
const Atendimento= require('../models/atendimentos')
module.exports= app =>{
app.get('/atendimentos', (req, res)=> res.send('você está na rota de atendimentos e esta realizando um get'))



app.post('/atendimentos',(req, res)=> {
    console.log(req.body)
    const atendimento= req.body
    Atendimento.adiciona(atendimento)
    res.send('Você está na rota de atendimentos e está enviando um POST')
})
}
