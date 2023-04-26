const cerveja = require('../model/cerveja');

//OBTER TODAS AS ROTAS POSSÍVEIS DO SITE
exports.getRotas = (req,res)=>{
    var rotas_disponiveis = [
        '/cervejaria/nome/Heineken',
        '/cervejaria/nacionalidade/Holanda',
        '/cervejaria/ordenar-abv',
        '/cervejaria/tipo/Pielsen',
        '/cervejaria/nome-parcial/nek'
    ]
    res.status(200).send({rotas_disponiveis});
}

//OBTER DESCRIÇÃO DA CERVEJA PELO SEU NOME
exports.getPorNome = (req,res)=>{
    cerveja.getPorNome(req.params.nome).then(
        (resultado)=> res.status(200).json(resultado.rows),
        (erro)=>      res.status(404).send({"Erro:":erro})
    )
}

//OBTER DESCRIÇÃO DA(S) CERVEJA(S) PELA SUA NACIONALIDADE
exports.getPorNacionalidade = (req,res)=>{
    cerveja.getPorNacionalidade(req.params.nacionalidade).then(
        (resultado)=> res.status(200).json(resultado.rows),
        (erro)=>      res.status(404).send({"Erro:":erro})
    )
}

//OBTER TODAS AS CERVEJAS EM ORDEM DECRESCENTE DE ABV
exports.getAbvDecrescente = (req,res)=>{
    cerveja.getAbvDecrescente().then(
        (resultado)=> res.status(200).json(resultado.rows),
        (erro)=>      res.status(404).send({"Erro:":erro})  
    )
}

//OBTER DESCRIÇÃO DA(S) CERVEJA(S) PELO SEU TIPO
exports.getPorTipo = (req,res)=>{
    cerveja.getPorTipo(req.params.tipo).then(
        (resultado)=> res.status(200).json(resultado.rows),
        (erro)=>      res.status(404).send({"Erro:":erro})
    )
}

//PESQUISAR CERVEJA(S) DIGITANDO APENAS PARTE DO SEU NOME
exports.getPorNomeParcial = (req,res)=>{
    cerveja.getPorNomeParcial(req.params.nome_parcial).then(
        (resultado)=> res.status(200).json(resultado.rows),
        (erro)=>      res.status(404).send({"Erro:":erro})
    )
}
