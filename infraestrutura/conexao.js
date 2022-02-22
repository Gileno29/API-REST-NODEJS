const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:'localhost',
    user:'teste',
    password:'1234',
    port:3306,
    database:'agendapetshop'
})

module.exports=conexao

