//Tipos de dados para exportar exemplo



// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// console.log(module.exports);





//Exemplos de outros tipos de dados para exportar

const name = 'João';


class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}
//Por ser uma classe não pode usar module.exports.Pessoa = Pessoa;
exports.Pessoa = Pessoa;

