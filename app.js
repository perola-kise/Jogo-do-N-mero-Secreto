let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que o chute!')
        } else {
            exibirTextoNaTela('p','O número secreto é maior que o chute!')
     }
        tentativas++;
         limparChute();
    }
}

function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosNaLista == numeroLimite){
        return gerarNumeroAleatorio();
    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();

    } else {

        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }


}

function limparChute() {
    chute = document.querySelector('input');  
    chute.value = '';  
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

} 
