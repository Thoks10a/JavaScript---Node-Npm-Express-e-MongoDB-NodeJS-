//////////////////////////////////////   MANUSEIOS DE UMA API   //////////////////////////////////////////////////////

// CRUD -> CREATE     READ    UPDATE    DELETE
//         POST       GET     PUT       DELETE 


// HTTP://MEUSITE.COM/ <- GET -> ENTREGUE A PÁGINA     ((((    ROUTE     ))))
////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(
        `<form action="/" method="POST">Nome do cliente: <input type="text" name="nome"><button>Olá mundo</button></form>`
    )
});

app.get('/teste/:idUsuarios?',(req,res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);

});

app.get('/',(req,res) => {
    res.send('Recebi o formulário!');

});

// app.get('/contato',(req,res) => {
//     res.send('Obrigado por acessar nosso site , muito bem vindo e espero ter ajudado! :) ')
// });

app.listen(3000,() => {
    console.log('http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});



