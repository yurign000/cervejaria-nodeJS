const cervejaria = require('../database');

exports.getPorNome = (nome)=>{
    return cervejaria.query(`SELECT * FROM cervejas WHERE nome='${nome}'`)
}
exports.getPorNacionalidade = (nacionalidade)=>{
    return cervejaria.query(`SELECT * FROM cervejas WHERE nacionalidade='${nacionalidade}'`)
}
exports.getAbvDecrescente = ()=>{
    return cervejaria.query(`SELECT * FROM cervejas ORDER BY abv DESC`)
}
exports.getPorTipo = (tipo)=>{
    return cervejaria.query(`SELECT * FROM cervejas WHERE tipo='${tipo}'`)
}
exports.getPorNomeParcial = (nome_parcial)=>{
    return cervejaria.query(`SELECT * FROM cervejas WHERE nome LIKE '%${nome_parcial}%'`)
}