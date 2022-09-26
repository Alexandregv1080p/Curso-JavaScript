//A function filter, funciona literalmente como filtro
let numbers = [1,2,3,4,5,6,7,8]

const greaterThanZero = el => el > 0
const greaterThanThree = el => el > 3 //arrow fuction
const even = el => el % 2 === 0 //numeros pares

console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanThree))
console.log(numbers.filter(even))

const students = [
    {nome:'Jake', score: 6.4},
    {nome:'Susan', score: 8.6},
    {nome:'Emma', score: 9.4},
    {nome:'Peter', score: 9.1},
]

const greaterStudent = student => student.score > 9 //seleciona todos os objetos que possuem score maiores que 9 

console.log(students.filter(greaterStudent))