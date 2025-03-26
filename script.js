// Atividade 11

function verificarSinal(n1) {
    if (n1 > 0){
        console.log(n1 + " é um número positivo")
    }else if (n1 === 0) {
        console.log(n1 + " é o zero")
    }else if (n1<0) {
        console.log(n1 + " é um número negativo")
    }
}

let n1 = parseFloat(prompt("Digite um valor"))
verificarSinal(n1)

// Atividade 12

function converterTemperatura(temp){
    let tempconvertido = (temp * 9/5) + 32
    console.log(temp + "°C em fahrenheit é de " + tempconvertido + "°F")
}

let temp = parseFloat(prompt("Digite a temperatura em Graus Celsius"))
converterTemperatura(temp)

// Atividade 13

let i = 0
let valorfinal = 0
while(i < 100){
    i = i + 1
    valorfinal = i + valorfinal
}
console.log("O valor final é de " + valorfinal)

// Atividade 14

function substituirPalavra(){
    let texto = prompt("Digite uma frase ou texto com a palavra azul")
    console.log(texto.replace(/azul/g, "vermelho"));
}

substituirPalavra()

// Atividade 15

function verificarTamanho(palavra){
    if (palavra.length > 10) {
        console.log("Tem mais de 10 caracteres")
    } if (palavra.length < 10){
        console.log("Tem menos de 10 caracteres")
    } if (palavra.length === 10){
        console.log("Tem 10 carateres")
    }
}

let palavra = prompt("Digite uma palavra")
verificarTamanho(palavra)

// Atividade 16

let frutas = ["Maçã", "Banana", "Mamão", "Morango", "Uva"]
console.log(frutas[2])

// Atividade 17

function saudacao(nome){
    let saudacao = "Bem-Vindo(a) "
    console.log(saudacao + nome)
}

let nome = prompt("Digite seu nome")
saudacao(nome)