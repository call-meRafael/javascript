
const agora = new Date()
const horario = agora.getHours()
console.log(`Agora são exatamente ${horario} horas.`)
if (horario < 12) {
    console.log('Bom dia!')
} else if (horario <= 18) {
    console.log('Boa tarde!')

} else if (horario < 24 && horario < 5) {
    console.log('boa noite!')

} 
  