function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    let frmAno = document.querySelector('#TextoAno')
    const resultado = document.querySelector('#res')
    if (frmAno.value.length == 0 || Number(frmAno.value) > ano) {
        resultado.innerHTML = '[ERRO] Preencha o campo corretamente!'
    } else {
        let frmSexo = document.getElementsByName('gender')
        let idade = ano - Number(frmAno.value)
        let genero = ''
        if (frmSexo[0].checked) {
            genero = 'Homem'
        } else if (frmSexo[1].checked) {
            genero = 'Mulher'
        }
        resultado.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos.`
    }
    
}