
// Elaborar um programa para a revendedora de veículos O'Rafa, que leia modelo e preço de um veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x sem juros.


// Referências aos elementos da página
const formulario = document.querySelector('form')
const outResp1 = document.querySelector('#outResp1')
const outResp2 = document.querySelector('#outResp2')
const outResp3 = document.querySelector('#outResp3')

formulario.addEventListener('submit', (e) => {
    const veiculo = formulario.inVeiculo.value
    const preco = Number(formulario.inPreco.value)

    const entrada = preco / 2
    const parcela = entrada / 12

    outResp1.innerText = `Promoção: ${veiculo}`
    outResp2.innerText = `Entrada de: ${entrada.toLocaleString('pt-BR', 
        {style: 'currency',
         currency: 'BRL'})}`
    outResp3.innerText = `+ 12x de ${parcela.toLocaleString('pt-BR',
        {style: 'currency',
         currency: 'BRL'})}`
    
    e.preventDefault() // impede o reenvio do formulário
})