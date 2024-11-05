let TotalCarrinho = []

function adicionar() {
let Qtd = document.getElementById("quantidade").value;
let produto = document.getElementById('produto').value;

let NomeProduto = produto.split('-')[0]
let ValorUnitario =Number(produto.split('R$')[1])
let valorProudto = Qtd * ValorUnitario
if(TotalCarrinho.length === 0){let carrinho = document.getElementById('lista-produtos');
let TextoCarrinho = carrinho.querySelector('section');
TextoCarrinho.innerHTML = `<span class="texto-azul"> </span><span class="texto-azul"></span><p>`}

if(Qtd <= 0) {alert (`Insira a quantidade desejada do produto selecionado`)}
else {
let carrinho = document.getElementById('lista-produtos');
let TextoCarrinho = carrinho.querySelector('section');
TextoCarrinho.innerHTML += `<p><span class="texto-azul">${Qtd}x </span> ${NomeProduto} <span class="texto-azul">R$${valorProudto}</span><p>`

TotalCarrinho.push(Number(valorProudto))

let valorTotalCarrinho = document.getElementById('valor-total');
valorTotalCarrinho.innerHTML = `R$${TotalCarrinho.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)},00`;}

document.getElementById("quantidade").value = ''
}

function limpar() {
TotalCarrinho = []
let valorTotalCarrinho = document.getElementById('valor-total');
valorTotalCarrinho.innerHTML = 'R$0';

let carrinho = document.getElementById('lista-produtos');
let TextoCarrinho = carrinho.querySelector('section');
TextoCarrinho.innerHTML = '<span class="texto-azul"> </span> Carrinho <span class="texto-azul"> Vazio </span>'

}



