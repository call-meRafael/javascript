
function calcularMedia(valor1, valor2) {
    let media = (valor1 + valor2) / 2
    if (media >= 7) {
        console.log(`Aluno aprovado com a média de: ${media} pontos. Parabéns!`)
    } else {
        console.log(`Aluno reprovado com a média de: ${media} pontos. Desculpe!`)
    }
}
calcularMedia(7, 8)
calcularMedia(5, 6)