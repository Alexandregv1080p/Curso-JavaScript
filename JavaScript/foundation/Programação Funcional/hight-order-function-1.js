//Quando uma função pode ter o argumento de outra função

let run = (fn)=>{
    return fn()
}

let sayHello = () =>{
    console.log('Hello!!')
}
//run(sayHello()) => undefined, pois a função esta sendo invocada e não retornando nada

run(sayHello) 

//Outro método...

run(function(){
    console.log('Runnnn')
})

const result = run(Math.random)

console.log(result)