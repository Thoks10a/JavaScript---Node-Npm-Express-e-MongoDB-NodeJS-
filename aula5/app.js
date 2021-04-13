const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');


// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Carla'},
//     {nome: 'Luiza'},
// ];
// const json = JSON.stringify(pessoas,'',2);
// escrever(caminhoArquivo,json);

async function leArquivo(caminho){
   const dados = await ler(caminho);
   return dados;
}

const dadosArquivo = leArquivo(caminhoArquivo)
.then (dados => console.log(dados));