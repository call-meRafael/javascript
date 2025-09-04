
function contar() {
    let inicio = document.querySelector('#inInicio')
    let fim = document.querySelector('#inFim')
    let passo = document.querySelector('#inPasso')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        
        res.innerHTML = '[ERRO] Preencha todos os campos!'
        
    } else {
        res.innerHTML = `Contando...`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let contador = i; contador <= f; contador += p) {
            res.innerHTML +=  ` ${contador} \u{1F929}`
        }
    }
}