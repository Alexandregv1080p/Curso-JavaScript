let exec = (fn,a,b)=>{
    return fn(a,b)
}
let somarNoTerminal = (a,b)=>{
    return a+b
}
let subtrairNoTerminal = (a,b)=>{
    return a - b
}
console.log(exec(somarNoTerminal,10,10))

let teste = ()=> console.log('testanto...')

setInterval(teste,5000)