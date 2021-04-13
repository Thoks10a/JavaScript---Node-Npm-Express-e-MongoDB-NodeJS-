const fs = require('fs').promises;



module.exports = (caminho,dados) => {
fs.writeFile(caminho,dados/*,'Frase 1\n'*/,{flag: 'w'});
};