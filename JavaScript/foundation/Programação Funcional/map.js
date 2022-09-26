//a função map é responsável por transformar um array

const numbers = [1,2,3,4,5,6]

const numbersV2 = numbers.map((el)=>{
    return el * 2
})

console.log(numbers,numbersV2)

const students = [
    {nome: 'Jake', score: 8.4},
    {nome: 'Peralta', score: 4.7},
    {nome: 'Maria', score: 6.4},
    {nome: 'Ana', score: 7.1},
]

const studentsV2 = students.map(el => el.score)

const getScore = el => el.score

console.log(studentsV2)

console.log(students.map(getScore).map(Math.ceil))