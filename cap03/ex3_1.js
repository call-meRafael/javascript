
const prompt = require('prompt-sync')() // adiciona pacote para entrada de dados
const num1 = Number(prompt('1º Númer:')) // Lê os números digitados pelo usuário
const num2 = Number(prompt('2º Número:'))
const soma = num1 + num2
console.log(`Soma é: ${soma}`)