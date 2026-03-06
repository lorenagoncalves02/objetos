class Senai{
    codigo;
    cidade;

    descreverEscola(){
        // A palavra reservada this refere ao objeto no contexto atual. é usado para acessar propriedades e métodos do objeto corrente.
        console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)
    }
}

const senaiArqa = new Senai();
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiArqa.cidade = 'Matão';
senaiMat.rua = 'Rua das Flores'

senaiArqa.descreverEscola();
senaiMat.descreverEscola();






