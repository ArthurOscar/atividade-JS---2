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