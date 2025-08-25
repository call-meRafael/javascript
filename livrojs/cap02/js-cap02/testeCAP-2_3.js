

// Elabore um programa para uma lan house de um aeroporto. O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.

const formulario = document.querySelector('form')
const resp1 = document.querySelector('h3')

formulario.addEventListener('submit', (e) => {
    const valor15Min = Number(formulario.valorFracao.value)
    const tempoUso = Number(formulario.tempoUso.value)

    const pagar = Math.ceil(tempoUso / 15) * valor15Min

    resp1.innerText = `O valor a ser pago é de: ${pagar.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`;

    e.preventDefault()
});