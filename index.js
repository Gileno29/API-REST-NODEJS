const express = require('express')

const app= express()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

//req --> o que foi enviado para a  gente
//res --> nossa resposta para quem requisitou
app.get('/atendimentos', (req, res)=> res.send('você está na rota de atendimentos e esta realizando um get'))