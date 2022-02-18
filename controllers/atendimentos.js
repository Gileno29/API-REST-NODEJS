//exporta o app como uma funcao
module.exports= app =>{
app.get('/atendimentos', (req, res)=> res.send('você está na rota de atendimentos e esta realizando um get'))



app.post('/atendimentos',(req, res)=> {
    console.log(req.body)
    res.send('Você está na rota de atendimentos e está enviando um POST')
})
}
