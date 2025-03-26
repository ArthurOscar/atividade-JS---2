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