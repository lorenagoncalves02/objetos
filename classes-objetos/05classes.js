class Senai{
    // no js moderno, podemos omitir a declaração das variaveis no topo
    // se formos atribuii-las dinamicamente, mas manter o método é essencial
    descreverEscola(){
        // o this´refere-se a instancia específica que está executando o código
        console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)
    }
}

// instancia -> é o objeto real criado a partir do molde
// usamos const para garantir que a variável sempre aponte para este objeto.
const senaiArqa = new Senai();
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiArqa.cidade = 'Matão';
senaiMat.rua = 'Rua das Flores'

// executando as ações (metodos)
senaiArqa.descreverEscola();
senaiMat.descreverEscola();





