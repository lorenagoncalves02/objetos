/* Exercícios:
  1. No molde da classe 'Senai', adicione o atributo 'statusFuncionamento' 
     que deve iniciar sempre como 'false' (escola fechada por padrão).
  2. Crie o método 'abrirEscola()' para alterar o status para 'true' e
     exibir uma mensagem de boas-vindas.
  3. Crie o método 'fecharEscola()' para alterar o status para 'false' e
     avisar que as atividades encerraram.
  4. Teste as funcionalidades nas instâncias criadas.
*/


class Senai {
    constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;
        this.statusFuncionamento = false;

        this.idade = new Date().getFullYear() - anoConstrucao;

    }

    dadosEscola() {
        console.log(`\n=== UNIDADE: ${this.cidade.toUpperCase()} ===`);
        console.log(`- Status : ${this.statusFuncionamento}`);
        console.log(`- Idade: ${this.anoConstrucao} | Cursos: ${this.qtdeCursos}`);
        console.log(`==========================================\n`);
    }

    abrirEscola(statusFuncionamento) {
        statusFuncionamento == true;
        console.log('A escola está aberta');
        
    }

    fecharEscola(statusFuncionamento = false){
        statusFuncionamento == false;
        console.log('A escola está fechada');
        
    }

}

const funcionamentoEscola = (e1) => {
    console.log(`> Unidade: ${e1.cidade}`);

    if (e1.statusFuncionamento == false) {
        console.log(`${abrirEscola()}`);
    } else {
        console.log(`${fecharEscola()}`);
    }
    console.log(`Status: ${e1.statusFuncionamento} (${e1.qtdeCursos})\n`);
}


const escolaA = new Senai(12, 'Araraquara', 1800, 12, true);
const escolaB = new Senai(13, 'Taubate', 1700, 15, false);



