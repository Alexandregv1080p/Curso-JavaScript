const carrinho = [
    {nome:'Caneta', qtde:10, preço:7.99},
    {nome:'Impressora', qtde:0, preço:649.50},
    {nome:'Caderno', qtde:4, preço:27.10},
    {nome:'Lapis', qtde:3, preço:5.82},
    {nome:'Tesoura', qtde:1, preço:19.20},
]
const getTotal = item => item.qtde * item.preço
const somar  = (acc,el) => {
    console.log(acc,el)
    return acc + el
}

const totais = carrinho.map(getTotal)

console.log(totais)

const totalGeral = totais.reduce(somar)

console.log(totalGeral)