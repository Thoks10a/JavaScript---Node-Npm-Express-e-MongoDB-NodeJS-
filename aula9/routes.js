const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');




// ROTAS
// ROTA HOME
route.get('/',homeController.paginaInicial);
route.post('/',homeController.trataPost);

//ROTA CONTATO
route.get('/contato',contatoController.infoContato);




module.exports = route;

