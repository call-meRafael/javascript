const frm = document.querySelector('form')
const result = document.querySelector('#res')

frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = frm.inName.value 
  const grade1 = Number(frm.firstGrade.value)
  const grade2 = Number(frm.secondGrade.value)
  const grade3 = Number(frm.thirdGrade.value)
  const grade4 = Number(frm.fourthGrade.value)

  const averageTotalGrade = (grade1 + grade2 + grade3 + grade4) / 4
  result.innerText = `${name}, your grade is ${averageTotalGrade.toFixed(2)}!`
})