class Senai {
    constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;

        // calculando a idade com base no ano atual do sistema
        this.idade = new Date().getFullYear() - anoConstrucao;
    }

    // touppercase é pra deixar todas as letras maiusculas
    dadosEscola() {
        console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
        console.log(`- Código: ${this.codigo}`);
        console.log(`- Fundação: ${this.anoConstrucao} (${this.idade} anos de historia)`);
        console.log(`- Capacidade: ${this.qtdeCursos} cursos ativos.`);
        console.log(`==========================================\n`);
    }
}

const compararEscolas = (e1, e2) => {
    console.log(`> Comparando oferta de cursos: ${e1.cidade} vs ${e2.cidade}...`);

    if (e1.qtdeCursos > e2.qtdeCursos) {
        console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos`);
    } else if (e2.qtdeCursos > e1.qtdeCursos){
        console.log(`Resultado: O ENAI ${e2.cidade} possui mais cursos.`);
    } else {
        console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
    }
    console.log(`Status: ${e1.cidade} (${e1.qtdeCursos}) | ${e2.cidade} (${e2.qtdeCursos})\n`);
}

const escolaA = new Senai(12, 'Araraquara', 1800,12);

escolaA.dadosEscola();
