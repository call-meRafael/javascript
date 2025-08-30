const frm = document.querySelector('#frm1')
const result = document.querySelector('#res')
const result2 = document.querySelector('#res2')

frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = frm.inName.value 
  const grade1 = Number(frm.firstGrade.value)
  const grade2 = Number(frm.secondGrade.value)
  const grade3 = Number(frm.thirdGrade.value)
  const grade4 = Number(frm.fourthGrade.value)

  const averageTotalGrade = (grade1 + grade2 + grade3 + grade4) / 4
  result.innerText = `${name}, your grade is ${averageTotalGrade.toFixed(1)}!`

  if (averageTotalGrade >= 7.0) {
    result2.innerText = "Congratulations, you passed!";
  } else {
    result2.innerText = "Sorry, you did not pass.";
  }
})