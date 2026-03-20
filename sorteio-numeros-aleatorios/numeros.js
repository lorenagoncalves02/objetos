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
sliderMin.addEventListener('click', atualizarValorSlider);
sliderMax.addEventListener('input', atualizarValorSlider);

//inicializar interface com o valores atuais
atualizarValorSlider();

//função para gerar um numero aleatorio
const gerarNumeroAleatorio = (min,max) => {
    let numeroAleatorio = Math.floor(Math.random() * (max - min +1));
    numeroAleatorio += min;
    return numeroAleatorio;
};

const atualizarTexto = (elemento, valor) => {

};






