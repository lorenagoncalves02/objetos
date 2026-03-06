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
let quadrado = {
    lados: 4,
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lados * lado
    }
};

quadrado.cor = '#000';


