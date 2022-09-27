const { listenerCount } = require("process")

let a = 1

//um promessa gera um unico valor
//a n ser q seja um objeto
//let p = new Promise(function(cumprirPromessa){
//     cumprirPromessa({
//        x:3,
//        y:4
//     })
//})

//console.log(typeof p) -> object

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana','Bia','Carlos','Vander'])
    
})


//quando a promessa for cumprida .then
//
    //.then(valor => valor[0])//pega o primeiro item do array
    //.then(valor => console.log(valor))//exibe o primeiro item
    //.then(primeiroDoArray())//pega o primeiro elemento do primeiro item
    //.then(letra => letra.toLowerCase())//transforma o primeiro elemento em minuscula
    //.then(minuscula => console.log(minuscula))
//
let primeiroDoArray = (array)=>{
    return array[0]
}
p
    .then(valor => valor[0])