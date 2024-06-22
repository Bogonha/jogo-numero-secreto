let listaNumerosSorteados = [];
let numeroInformativo = 50;
let numeroSecreto = gerarNumeroAleatorio();

let numTentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemNovoJogo() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroInformativo}`);
}
mensagemNovoJogo();
console.log(`O numero secreto é ${numeroSecreto}`);
function verificarChute() {
  let chute = document.querySelector("input").value;
  zerarItensLista();
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = numTentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você acertou o número secreto com ${numTentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto é menor!");
    } else {
      exibirTextoNaTela("p", "O numero secreto é maior!");
    }
    numTentativas++;
    limparCampo();
  }
}
function zerarItensLista() {
  if (listaNumerosSorteados.length == 40) {
    listaNumerosSorteados = [];
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroInformativo + 1);
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function novoJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  verificarChute();
  limparCampo();
  numTentativas = 1;
  mensagemNovoJogo();
  console.log(`O numero secreto é ${numeroSecreto}`);
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
