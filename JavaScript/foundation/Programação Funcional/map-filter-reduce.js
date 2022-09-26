const students = [
    {nome:'Jake', score: 6.4},
    {nome:'Susan', score: 8.6},
    {nome:'Emma', score: 9.4},
    {nome:'Peter', score: 9.1},
]
const greaterStudent = student => student.score > 9

const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el)/array.length
    }else{
        return acc + el
    }
}

console.log(students
    .filter(greaterStudent) //filta todos os alunos com a nota acima de 9
    .map(getScore) //mapeia todas as notas que estão acima 9
    .reduce(avg) //calcula a média pego pelo map
)
