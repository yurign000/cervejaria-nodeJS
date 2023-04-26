const express = require('express');
const bodyParser = require('body-parser');
const cerveja = require('./router/cerveja'); //ROTAS DO SERVIDOR
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/cervejaria",cerveja);

//RESPOSTA PARA O CLIENT CASO A ROTA NÃO SEJA ENCONTRADA
app.get('*',(req,res)=>{
    res.status(404).send({"erro":"Página não encontrada"})
})

//INICIAR SERVIDOR
app.listen(port,()=>{
    console.log("O bar está aberto.");
});


