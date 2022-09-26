const carrinho = [
    {nome:'Caneta', qtde:10, preço:7.99},
    {nome:'Impressora', qtde:1, preço:649.50},
    {nome:'Caderno', qtde:4, preço:27.10},
    {nome:'Lapis', qtde:3, preço:5.82},
    {nome:'Tesoura', qtde:1, preço:19.20},
]

const getResult = item => item.qtde * item.preço
          //acumulador  //elemento
          //0           //primeiro elemnento
const somar = (acc,el) => acc + el


console.log(carrinho
    .map(getResult)
    .reduce(somar,0)
    )