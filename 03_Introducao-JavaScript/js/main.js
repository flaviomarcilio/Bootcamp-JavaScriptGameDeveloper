/* Variáveis
var nome = "Flávio Marcílio";
var num = 23
var num2 = 10
var frase = "Japão é o melhor time do mundo!"
//alert(`Bem vindo ${nome}`);
//alert(num + num2);
console.log(num + num2);
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));*/

/* Listas
var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
lista.push("uva")
console.log(lista)
lista.pop()
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join("-"))*/

/* Dicionários
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta)
console.log(fruta.nome)
var frutas = [{nome:"maçã", cor:"Vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas)
alert(frutas[1].nome)*/

/* Condicionais, laços de repetição e datas
var idade = prompt("Qual a sua idade?")
if(idade >= 18){
    alert("Maior de idade!")
}else{
    alert("Menor de idade!")
}
var count = 0
while(count < 5){
    console.log(count)
    count++
}
var count
for (count = 0; count <= 5; count++){
    alert(count)
}
var d = new Date()
alert(d.getDate()) */

/* Funções
function soma(n1, n2){
    return n1 + n2
}
alert(soma(2,5))*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    //alert("Obrigado por clicar!")
}

function redirecionar(){
    window.open("https://www.google.com.br/")
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}