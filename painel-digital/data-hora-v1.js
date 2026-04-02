//coloque tudo em uma função so pq ai eu so chamo ela
const app = () =>{
    //criando os elementos via javascript para manter o codigo funcional
    //toda vez q e um metodo -> é uma função dentro de um objeto, por isso nao uso o parentese
    const containerData = document.createElement('div');
    const containerHora = document.createElement('div');
    const containerDiaSemana = document.createElement('div');

    //adicionando-a ao corpo da pagina
    function criarElementos(){
        document.body.appendChild(containerData);
        document.body.appendChild(containerHora);
        document.body.appendChild(containerDiaSemana);

    };



    function atualizarRelogio() {
        const agora = new Date();

        //atualizando apenas o conteudo de cada container
        containerData.textContent = agora.toLocaleDateString();
        containerHora.textContent = agora.toLocaleTimeString();
        containerDiaSemana.textContent = agora.toLocaleString('pt-br', {weekday: 'long'});
    };

    function aplicarEstilos() {
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center'
        document.body.style.height = '100vh'; //centraliza na tela toda
        document.body.style.margin = '0';
        //formatar a fonte
        document.body.style.fontSize = '80px'; //um pouco menor para caber os dois
        document.body.style.color = 'red';
        document.body.style.fontFamily = 'sans-serif';
    };


//inicialização
criarElementos();
aplicarEstilos();
atualizarRelogio();
setInterval(atualizarRelogio,1000);

}

app()


// exemplo de contador
// let contador = 0;
// const atualizaContador = () =>{

//     contador++
//     if (contador == 6) {
//         contador = 0;
//       };

//     document.body.textContent = contador;
// };









