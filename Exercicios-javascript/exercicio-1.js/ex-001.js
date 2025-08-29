

function carregar() {
    const msg = document.querySelector('#msg');
    const foto = document.querySelector('#foto');
    const data = new Date();
    // const hora = data.getHours();
    const hora = 22
    msg.innerHTML = `Agora são ${hora} horas no horário de Brasília.`;
    if (hora >= 0 && hora < 12) {
        foto.src = '../imagens/manhã.jpg'
    } else if (hora >= 12 && hora < 18) {
        foto.src = '../imagens/tarde.jpg'
    }
}