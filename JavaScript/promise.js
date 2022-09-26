let a = 1

//um promessa gera um unico valor
//a n ser q seja um objeto
let p = new Promise(function(cumprirPromessa){
     cumprirPromessa({
        x:3,
        y:4
     })
})

//console.log(typeof p) -> object

//quando a promessa for cumprida

p.then(function(valor){
    console.log(valor)
})