let exec = (fn,a,b)=>{
    return fn(a,b)
}
const somaNoTerminal = (a,b)=>{
    console.log(a + b)
}
const subNoTerminal = (a,b)=>{
    console.log(a - b)
}
exec(somaNoTerminal, 56, 38)
exec(subNoTerminal, 182, 27)

