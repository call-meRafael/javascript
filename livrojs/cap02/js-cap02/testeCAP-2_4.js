

const formulario = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

formulario.addEventListener('submit', (e) => {
    const produto = formulario.inProduto.value
    const preco = Number(formulario.inPreco.value)

    const terceiro = preco / 2
    const total = (preco * 2) + terceiro

    resp1.innerText = `${produto} - Promoção: Leve 3 pelo preço de 2 ${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
    resp2.innerText = `O 3º produto custa apenas ${terceiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

    e.preventDefault()

})