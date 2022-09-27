const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

//let exibirConteudo = (_,conteudo)=>{ //não entendi pq n funcionou
//    resolve(conteudo.toString())
//}

//fs.readFile(caminho,exibirConteudo)

const lerArquivo = (caminho)=>{
    return new Promise(resolve =>{
        fs.readFile(caminho,(_,conteudo)=>{
            resolve(conteudo.toString())
        })
        console.log("executou")
    })
    
}
const caminho = path.join(__dirname,'doc.txt')
lerArquivo(caminho).then(conteudo => console.log(conteudo))
