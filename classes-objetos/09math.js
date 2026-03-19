// logica para sortear numeros entre 1 e 15


const gerarNumeroAleatorio = () => {

    // math.random() gera um numero entre 1 e 0 (exclusivo)
    let numeroAleatorio = Math.random;
    console.log(`Sorteio : ${numeroAleatorio}`);

    //multiplicamos por 15 para obter um numero entre 0 e 14 (exclusivo)
    numeroAleatorio *= 15;
    console.log(`Multiplicar: ${numeroAleatorio}`);

    //math.floor() para arredondar para BAIXO um numero inteiro
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(`Arredondar: ${numeroAleatorio}`);

    //somamos 1 para obter um numero entre 1 e 15 (inclusivo)
    numeroAleatorio += 1;
    console.log(`Somar 1: ${numeroAleatorio}`);

    //retorna o numero aleatorio
    return numeroAleatorio;

}

//atribuindo a função a uma variavel
let numeroSorteado = gerarNumeroAleatorio();

//exibindo o numero sorteado
console.log(`Numero sorteado: ${numeroSorteado}`);
