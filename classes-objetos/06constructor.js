class Senai {
    constructor(codigo, cidade) {
        this.codigo = codigo;
        this.cidade = cidade;
    }

    dadosEscola() {
        console.log(`Unidade: ${this.cidade} | Código Interno: ${this.codigo}`)
    }
}

const escolaA = new Senai(603, 'Araraquara');
const escolaB = new Senai(145, 'São Carlos');
const escolaC = new Senai(545, 'Américo Brasiliense');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();