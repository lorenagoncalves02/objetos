const quantidadeNumerosRecentes = 5

// obter os elementos
const sliderMin = document.querySelector(".intervalo__slider--min");
const sliderMax = document.querySelector(".intervalo__slider--max");

//seção com o botao sortear e exibição do resultado
const botaoSortear = document.querySelector('area__button');
const elementoNumero = document.querySelector('.area__numero');
//
const listaNumeros = document.querySelector('.historico__lista');
const botaoLimparHistorico = document.querySelector('.sorteador__limpar');
//
const mensagem = document.querySelector(".area__mensagem")


// atualizar a interface com o valor do slider
const atualizarValorSlider = () =>{
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);
    console.log(min, max);

    // exibir o valor do slider na interface
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};


//evento para atualizar o valor em tempo real
sliderMin.addEventListener('input', atualizarValorSlider);
sliderMax.addEventListener('input', atualizarValorSlider);


//inicializar interface com o valores atuais
atualizarValorSlider();


//função para gerar um numero aleatorio
const gerarNumeroAleatorio = (min,max) => {
    let numeroAleatorio = Math.floor(Math.random() * (max - min +1));
    numeroAleatorio += min;
    return numeroAleatorio;
};


//função para atualizar o texto da interface com o numero sorteado
const atualizarTexto = (elemento, valor) => {

    elemento.textContent = valor;
};


// api armazena dados que funcionam automaticamente
//navegador vai colocar uma mensagem de texto na tela
const criarItemHistorico = (numero) => {
    const li = document.createElement('li');
    li.textContent = numero;

    li.addEventListener('click', () => {
        navigator.clipboard.writeText(numero);
    });

    return li;
};


//função para gerenciar a lista de numeros sorteados
const atualizarHistorico = (lista, item, limite) => {
    //prepend pendura o item na primeira posição da lista
    //append coloca no ultimo
    lista.prepend(item);

    //se a quantidade de linhas que estiverem na lista for maior do que o limite, ele vai remover a ultima lista
    if (lista.children.length > limite) {
        lista.removeChild(lista.lastChild);
    }
};


//função para limpar o historico de sorteios
const limparHistorico = () => {
    //se for verdadeiro ele vai limpar, se falso ele nao vai limpar
    if (confirm('Deseja realmente limpar o historico de sorteios?')) {
        listaNumeros.textContent = '';
        elementoNumero.textContent = '0';
    }
};


botaoSortear.addEventListener('click', () => {
    //primeiro verifico se o valor minimo é maior do que o valor maximo
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    if (min > max) {
        mensagem.textContent = 'O valor minimo deve ser menor ou igual ao valor máximo.';
        return;
    }

    mensagem.textContent = '';

    //criei a variavel numero sorteado pra guardar a função que vai sortear
    const numeroSorteado = gerarNumeroAleatorio(min,max);

    //chamei a função atualizar texto e coloquei o elemento que eu capturei la em cima
    //em seguida, coloquei o numero sorteado, os dois como parametro
    atualizarTexto(elementoNumero, numeroSorteado);

    //criei uma variavel item pra guardar o item historico
    //na função atualizar historico as funções são os parametros pedidos por ela: lista, item e limite
    const item = criarItemHistorico(numeroSorteado);
    atualizarHistorico(listaNumeros,item,quantidadeNumerosRecentes);
});

botaoLimparHistorico.addEventListener('click', limparHistorico)












