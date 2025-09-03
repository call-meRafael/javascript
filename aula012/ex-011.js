// Escreva um programa que verifica se uma pessoa pode votar com base na sua idade.

function podeVotar(idade) {
    if (idade >= 18 && idade <= 65) {
        console.log(`Você tem ${idade} anos, você pode votar!`)
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log(`Se você tem entre 16 e 17 anos ou mais de 65 anos, seu voto é facultativo.`)
    } else {
        console.log(`Você não tem idade suficiente para votar!`)
    }
}

podeVotar(16)
podeVotar(19)
podeVotar(67)
podeVotar(14)