const notas = [1,2,3,4,5,6]

const dobroNotas = el => el * 2

const dobroNotaCmI = (el, i) => el * 2 + i

console.log(notas.map(dobroNotas))
console.log(notas.map(dobroNotaCmI))

const nomes = ['Ana', 'Pedro', 'Lucas', 'Maria']
const segundaLetra = texto => texto[1]

console.log(nomes.map(segundaLetra))

const carrinho = [
    {nome:'Caneta', qtde:10, preço:7.99,fragil:true},
    {nome:'Impressora', qtde:1, preço:649.50,fragil:true},
    {nome:'Caderno', qtde:4, preço:27.10,fragil:false},
    {nome:'Lapis', qtde:3, preço:5.82,fragil:false},
    {nome:'Tesoura', qtde:1, preço:19.20,fragil:true},
]

const getNome = item => item.nome
const getMulti = item => item.preço * item.qtde

const nome = carrinho.map(getNome)
const getMult = carrinho.map(getMulti)

console.log(nome,getMult)


  