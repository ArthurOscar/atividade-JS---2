// Atividade 11

function verificarSinal(n1) {
    if (n1 > 0) {
        console.log(n1 + " é um número positivo")
    } else if (n1 === 0) {
        console.log(n1 + " é o zero")
    } else if (n1 < 0) {
        console.log(n1 + " é um número negativo")
    }
}

let n1 = parseFloat(prompt("Digite um valor"))
verificarSinal(n1)

// Atividade 12

function converterTemperatura(temp) {
    let tempconvertido = (temp * 9 / 5) + 32
    console.log(temp + "°C em fahrenheit é de " + tempconvertido + "°F")
}

let temp = parseFloat(prompt("Digite a temperatura em Graus Celsius"))
converterTemperatura(temp)

// Atividade 13

let i = 0
let valorfinal = 0
while (i < 100) {
    i = i + 1
    valorfinal = i + valorfinal
}
console.log("O valor final é de " + valorfinal)

// Atividade 14

function substituirPalavra() {
    let texto = prompt("Digite uma frase ou texto com a palavra azul")
    console.log(texto.replace(/azul/g, "vermelho"));
}

substituirPalavra()

// Atividade 15

function verificarTamanho(palavra) {
    if (palavra.length > 10) {
        console.log("Tem mais de 10 caracteres")
    } if (palavra.length < 10) {
        console.log("Tem menos de 10 caracteres")
    } if (palavra.length === 10) {
        console.log("Tem 10 carateres")
    }
}

let palavra = prompt("Digite uma palavra")
verificarTamanho(palavra)

// Atividade 16

let frutas = ["Maçã", "Banana", "Mamão", "Morango", "Uva"]
console.log(frutas[2])

// Atividade 17

function saudacao(nome) {
    let saudacao = "Bem-Vindo(a) "
    console.log(saudacao + nome)
}

let nome = prompt("Digite seu nome")
saudacao(nome)

// Atividade 18

function verificarAprovacao(nota) {
    if (nota >= 6) {
        console.log("Parabéns, com sua nota " + nota + " você foi aprovado")
    } else {
        console.log("Infelizmente você reprovou por ter uma nota de " + nota)
    }
}

let nota = parseFloat(prompt("Digite sua nota"))
verificarAprovacao(nota)

// Atividade 19

console.log("Números pares de 0 a 30")
for (let i = 0; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Atividade 20

function contarVogais(vogal) {
    let vogais = vogal.split("")
    let quantidade = 0
    let i = 0

    while (i <= vogal.length) {
        if ((vogais[i] === "a") || (vogais[i] === "e") || (vogais[i] === "i") || (vogais[i] === "o") || (vogais[i] === "u")) {
            quantidade = quantidade + 1;
        };

        i++;
    }
    console.log(quantidade + " vogais")
}

let vogal = prompt("Digite uma palavra com vogais")
contarVogais(vogal)

// Atividade 21

function somarArray(){
    let valores = prompt("Digite valores separados por vírgula").split(",").map(Number);
    console.log("Soma:", valores.reduce(acc, val) => acc + val)
}

somarArray()

// Atividade 22

function dobrarValor(numerodobro) {
    let n1dobro = numerodobro * 2
    console.log(n1dobro + " é o dobro de " + numerodobro)
}

let numerodobro = parseInt(prompt("Digite um valor para o dobro"))
dobrarValor(numerodobro)

// Atividade 23

i = 2
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i + " é par")
    }
    i++
}

// Atividade 24

function capitalizar() {
    let texto = prompt("Digite uma palavra:")
    console.log(texto.charAt(0).toUpperCase() + texto.slice(1))
}

capitalizar()

// Atividade 25

function anoBissexto(ano) {
    let bissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)
    console.log(bissexto)
}

let ano = parseInt(prompt("Digite um ano"))
anoBissexto(ano)