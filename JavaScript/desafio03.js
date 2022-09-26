const carrinho = [
    {nome:'Caneta', qtde:10, preço:7.99,fragil:true},
    {nome:'Impressora', qtde:1, preço:649.50,fragil:true},
    {nome:'Caderno', qtde:4, preço:27.10,fragil:false},
    {nome:'Lapis', qtde:3, preço:5.82,fragil:false},
    {nome:'Tesoura', qtde:1, preço:19.20,fragil:true},
]

//1.fragil:true
//2.qtde: 4,preço: 27,10 -> total
//3. media totais 

//const fragilObjt = item => item.fragil == true
//
//const qtde = item => item.qtde >= 4
//
//const media = item => item.qtde * item.preço
//
//const fragil = carrinho.filter(fragilObjt).filter(qtde).reduce(media)

//console.log(fragil)

//resolução 

const media = carrinho
    .filter(item => item.fragil == true)
    .map(item => item.qtde * item.preço)
    .reduce((acc,el)=>{
        const novaQtde = acc.qtde + 1 
        const novoTotal = acc.total + el
        return {
            qtde:novaQtde,
            total: novoTotal,
            media: novoTotal/novaQtde
        }
    },{qtde:0, total:0, media:0})

console.log(media)