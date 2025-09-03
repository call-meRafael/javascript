const frm = document.querySelector('#frm1')
const resultado1 = document.querySelector('#res1')
const resultado2 = document.querySelector('#res2')

// document.querySelector('#btnConfirmar').addEventListener('click', Confirmar)

function Confirmar() {
    
    let nome = frm.inNome.value
    let idade = Number(frm.inIdade.value)
    let salario = Number(frm.inSalario.value)

    resultado1.innerHTML = `Olá ${nome}, você tem ${idade} anos e uma remuneração de ${salario.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}

Confirmar()