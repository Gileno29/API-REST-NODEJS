const mysql = require('msyql')

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'agendapetshop'
})


