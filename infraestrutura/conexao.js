const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host:'localhost',
    user:'teste',
    password:'1234',
    port:3306,
    database:'agendapetshop'
})

module.exports=conexao

