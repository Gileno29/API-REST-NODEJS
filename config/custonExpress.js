const express = require('express')
const consign= require('consign')
const bodyParser = require('body-parser')


module.exports = () =>{

    const app= express()
    //a funcao use vem do proprio express
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

    //usado para fazer agrupamento de modulos.
    consign()
	    .include('controllers',)
	    .into(app)

        return app
}
