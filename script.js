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

// Atividade 18

function verificarAprovacao(nota){
    if (nota >= 6){
        console.log("Parabéns, com sua nota " + nota + " você foi aprovado")
    } else {
        console.log("Infelizmente você reprovou por ter uma nota de " + nota)
    }
}

let nota = parseFloat(prompt("Digite sua nota"))
verificarAprovacao(nota)

// Atividade 19

console.log("Números pares de 0 a 30")
for(let i = 0; i <=30; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// Atividade 20

function contarVogais(palavra){
    let vogais = palavra.split("")
    let quantidade = 0
    let i = 0
    while(i <= palavra.length){
        i++
        if(vogais[i] = "a", "e", "i", "o", "u"){
            quantidade = quantidade + 1
        }
    }
    console.log(quantidade + " vogais")
}

contarVogais("arroz")