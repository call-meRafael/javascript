
// Uma farmácia está com uma promoção - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total.

// Elabore um programa que leia a descrição e o preço de um medicamento e informe o valor do produto na promoção.

const formulario = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

formulario.addEventListener('submit', (e) => {
    const medicamento = formulario.inMedicamento.value
    const preco = Number(formulario.inPreco.value)

    const desconto = Math.floor(preco + preco)
    outResp1.innerText = `Promoção de ${medicamento}!`
    outResp2.innerText = `O valor promocional do produto é de: ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

    e.preventDefault()
})