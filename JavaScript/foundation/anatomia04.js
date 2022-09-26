function logParams(a,b,c){
    console.log(a,b,c);
}
logParams(1,2,3,4,5)
logParams(1,2,3)
logParams(1,2)
logParams(1)
logParams()
                //essa função consegue receber uma quantidade de variada de parâmetros
                //todos eles são armazenados dentro da função
function logNums(...nums){
    //verifica se o parâmetro nums é um array
    console.log(Array.isArray(nums))

}
logNums(1,2,3,4,5,6)
                //basicamente define uma quantidade flexivel
                //de parametros
function sumAll(...nums){
    let total = 0;
    for(let n of nums){
        total += n
    }
    return total
}
console.log(sumAll(1,4,5))