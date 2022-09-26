let somar = (a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(somar(3)(4)(5))

let calcular = (a)=>{
    return (b)=>{
       return (fn) => {
            return fn(a,b)
       }
    }
}
let subtrai = (a,b) =>{
    return a - b
}
console.log(calcular(3)(7)(subtrai))

const multiplica = (a)=>{
    return (b)=>{
        return a * b
    }
}

console.log(multiplica(10)(10))