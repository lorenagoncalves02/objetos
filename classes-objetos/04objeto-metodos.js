const senai = {
    codigo: 603,
    cidade: 'Araraquara',

    descreverEscola() {
        // A palavra reservada this refere ao objeto no contexto atual. é usado para acessar propriedades e métodos do objeto corrente.
        console.log(`O código ${senai.codigo} pertence a Escola SENAI de ${this.cidade}.`)
    }
};




senai.codigo = 608;
senai.cidade = 'Matão';
senai.descreverEscola()