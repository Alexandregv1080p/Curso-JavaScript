//arrow function

const felizNatal = ()=> { console.log('Bom diaaa') }

felizNatal()

const saudacao = (nome) => console.log(`Olaaa ${nome}`)

saudacao('Alice')

const somar = numeros =>{
    let total = 0
    for(let n of numeros){
        total+= n
    }
    return total
}
console.log(somar([1,2,3,4,5,6,7,8,9,10])) 

//desafio 

let potencia = (base)=>{
    return (exp)=>{
        return Math.pow(base,exp)
    }
}
console.log(potencia(2)(4))
let potenciaDeQuatro = potencia(4)
console.log(potenciaDeQuatro(4))

let potencia2 = base => 
    exp => {
        return Math.pow(base,exp)
    }

console.log(potencia2(4)(4))

let sominha = n1 =>
    n2 =>
        n3=>{
            return n1+n2+n3
        }
console.log()