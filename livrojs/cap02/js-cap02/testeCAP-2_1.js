
// Elaborar um programa para um Cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos, conforme destacada na figura exemplo.

// Cria referência ao formulário (form) e aos elementos h3 e h4 (respostas)
const formulario = document.querySelector('form')
const resposta1 = document.querySelector('h3')
const resposta2 = document.querySelector('h4')

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
formulario.addEventListener('submit', (e) => {
    const titulo = formulario.inTitulo.value  // Obtém o conteúdo dos campos do formulário
    const duracao = Number(formulario.inDuracao.value)  // Obtém o conteúdo dos campos do formulário

    const horas = Math.floor(duracao / 60) // Areedonda para baixo (dividindo por 60) o resultado
    const minutos = duracao % 60 // Obtém o resto da divisão por 60

    resposta1.innerText = `O filme ${titulo} dura:`  // Exibe a resposta do programa
    resposta2.innerText = `${horas} hora(s) e ${minutos} minutos`

    e.preventDefault() // Impede que o formulário seja submetido
})
