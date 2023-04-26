const pg = require('pg');
require('dotenv').config()

const database = new pg.Client({
     user:     process.env.USER,
     password: process.env.PASSWORD,
     host:     process.env.HOST,
});

database.connect((erro)=>{
     if(erro) console.log('Não foi possível conectar-se ao banco de dados');
     else     console.log('Conectado ao banco de dados');
})

module.exports = database;

