/* declaração de um objeto. chave:
valor;

01 - Criar objeto quadrado
02 - Criar funções (métodos, áreas e perímetro)
03 - entender o contexto this
04 - escrever de forma abreviada
05 - acessar os dados do objeto
*/


// let quadrado = {};
// let quadrado2 = [];
// let quadrado3 = [{}];



// chave -> lados
// valor -> 4



// forma literal

// let quadrado = {
//     lados: 4,
//     area: function(lado){
//         return lado * lado
//     },
//     perimetro: function(lado){
//         return this.lados * lado
//     }
// };




// forma reduzida
// esse const é so p dar exemplo de que mesmo que tenha sido aribuido um valor, o this faz ele pegar o valor de dentro do obj
const lados = 10;
let quadrado = {
    lados: 4,
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lados * lado
    }
};

// this -> pega o contexto do obj ao inves de pegar a quantidade de lados que esta fora do obj

quadrado.cor = '#000';

console.log(quadrado.perimetro(5))



/* 01 - criar um objeto senai
02 - acessar os dados da chave
03 - incrementar dados/alterar o objeto
04 - excluir um valor do objeto */

const senai = {
    codigo: 603,
    senai: 'Araraquara'
}

console.log('---------------------');

senai.telefone = 1633035252;
senai.rua = 'Hugo Negrini';
senai.telefone = 1723158968;

// deletar aluguma coisa que ta dentro do objeto
delete senai.rua

// um objeto dentro do outro
senai.endereço = {rua: 'Hugo Negrini', bairro: 'Quitandinha', numero:60};

senai.alunos = ['SESI', 'EEBA', 'comunidade'];

senai.endereço.numero = 62;

// pra mudar um dado específico: colocar o numero da coluna e depois mudar
senai.alunos[2] = 'tecnico';

console.log(senai);

