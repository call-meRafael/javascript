

// Elaboar um programa para o restaurante O´Rafa, que leia o preço em quilos e consumo do cliente em gramas e exiba o valor a ser pago.

const formulario = document.querySelector('form')
const resp1 = document.querySelector('h3')

formulario.addEventListener('submit', (e) => {
    const quilo = Number(formulario.inQuilo.value)
    const consumoGrama = Number(formulario.inGrama.value)

    const preco = (quilo / 1000) * consumoGrama
    resp1.innerText = `O valor a ser pago é de: ${preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`

    e.preventDefault()
})