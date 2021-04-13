//////////////////////////////////////   MANUSEIOS DE UMA API   //////////////////////////////////////////////////////

// CRUD -> CREATE     READ    UPDATE    DELETE
//         POST       GET     PUT       DELETE 


// HTTP://MEUSITE.COM/ <- GET -> ENTREGUE A PÁGINA     ((((    ROUTE     ))))
////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(routes);

// app.get('/contato',(req,res) => {
//     res.send('Obrigado por acessar nosso site , muito bem vindo e espero ter ajudado! :) ')
// });

app.listen(3000,() => {
    console.log('http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});



