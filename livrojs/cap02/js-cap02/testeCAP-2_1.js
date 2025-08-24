
// Elaborar um programa para um Cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos, conforme destacada na figura exemplo.

// Cria referência ao formulário (form) e aos elementos h3 e h4 (respostas)
const formulario = document.querySelector('form')
const resposta1 = document.querySelector('h3')
const resposta2 = document.querySelector('h4')

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
formulario.addEventListener('submit', (e) => {
    const titulo = formulario.inTitulo.value  // obtem o título do filme
    const duracao = Number(formulario.inDuracao.value) // obtem a duração do filme em minutos

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    resposta1.innerText = titulo // exibe o título do filme
    resposta2.innerText = `${horas} horas e ${minutos} minutos` // exibe a resposta do programa
    e.preventDefault() // impede que o formulario seja submetido
})
