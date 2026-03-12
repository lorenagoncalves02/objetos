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

    abrirEscola() {
        statusFuncionamento == true;
        console.log(`O SENAI ${this.cidade} está aberto.`);
        
    }

    fecharEscola(){
        statusFuncionamento == false;
        console.log(`O SENAI ${this.cidade} está fechado.`)
        
    }

    dadosEscola() {
        const statusTexto = this.statusFuncionamento ? "ABERTO" : "FECHADO";


        console.log(`\n=== UNIDADE: ${this.cidade} ===`);
        console.log(`- Status : ${statusTexto}`);
        console.log(`- Idade: ${this.idade} anos | Cursos: ${this.qtdeCursos}`);
        console.log(`==========================================\n`);
    }

}


const escolaA = new Senai(603, 'Araraquara', 1968, 450);
const escolaB = new Senai(13, 'Taubate', 1700, 15);

escolaA.dadosEscola()

