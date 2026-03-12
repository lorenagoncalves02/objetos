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

const escolaA = new Senai(12, 'Araraquara', 1800,12);

escolaA.dadosEscola();
