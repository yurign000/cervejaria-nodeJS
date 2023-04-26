const express = require('express');
const router = express.Router();
const cerveja = require('../controller/cerveja')

//ROTAS EXISTENTES NO SITE
router.get("/",cerveja.getRotas);
router.get("/nome/:nome",cerveja.getPorNome);
router.get("/nacionalidade/:nacionalidade",cerveja.getPorNacionalidade);
router.get("/ordenar-abv",cerveja.getAbvDecrescente);
router.get("/tipo/:tipo",cerveja.getPorTipo);
router.get("/nome-parcial/:nome_parcial",cerveja.getPorNomeParcial);

module.exports = router;