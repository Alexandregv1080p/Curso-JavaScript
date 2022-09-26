const fs = require('fs') //biblioteca p ler o arquivo
const path = require('path')

const caminho = path.join(__dirname, "doc.txt")//localiza o arquivo específico dentro do diretório

function exibiriConteudo(_,conteudo){
    console.log(conteudo.toString())//transforma o conteudo do caminho em string
}

fs.readFile(caminho, exibiriConteudo)

fs.readFile(caminho, (_,conteudo)=> console.log(conteudo.toString()))