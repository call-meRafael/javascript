// Cria referência ao formulário e ao subtítulo h3 (onde será exibida a reposta)

const formulario = document.querySelector('form')
const resposta = document.querySelector('h3')

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado

formulario.addEventListener('submit', (e) => {
    const nome = formulario.inNome.value  // obtem o nome digitado no formulario
    resposta.innerText = `Olá, ${nome}!` // exibe a resposta do programa
    e.preventDefault() // impede que o formulario seja submetido
    
})
