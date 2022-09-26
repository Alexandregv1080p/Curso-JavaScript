let bomDia = () =>{
    console.log('Bom dia ')
}
let boaTarde = () =>{
    console.log('Boa tarde')
}
function executarQualquerCoisa(fn){
    if(typeof fn == 'function') //se o tipo de fn for uma function, execute
    fn()
}
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)
executarQualquerCoisa('5')

//Retornar uma função a partir de outra 

let potencia = (number,pontenci) =>{
    return Math.pow(number,pontenci)
}
let bit8 = potencia(2,8)
console.log(bit8)

let multiplica = (number)=>{
    return (pontenci)=>{
        return number * pontenci
    }
}
let multiplicaPor2 = multiplica(2)
console.log(multiplicaPor2(8))

let sum = (number1)=>{
    return (number2)=>{
        return number1 + number2
    }
}

let somaComDez = sum(10)

console.log(somaComDez(10))

console.log(sum(10)(10))