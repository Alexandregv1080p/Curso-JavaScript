//importa bibliotecas
const fs = require('fs')
const path = require('path')

let caminho = path.join(__dirname,'linha.txt') //pega o diretório atual

let exibirConteudo = (err,conteudo)=>{
    console.log(conteudo.toString())
}

fs.readFile(caminho,{},exibirConteudo)

console.log(caminho)