const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');




// ROTAS
// ROTA HOME
route.get('/',homeController.paginaInicial);
route.post('/',homeController.trataPost);

//ROTA CONTATO
route.get('/contato',contatoController.infoContato);




module.exports = route;

