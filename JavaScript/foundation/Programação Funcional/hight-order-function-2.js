//curring
function finalPrice(tax){ //podemos retornar uma function, que retorna a sua função
    return (price) =>{
        return price * (1+tax);
    }
}

const finalPriceNy = finalPrice((0.0875))//definimos uma variável que armazenará o primeiro parâmetro da function

console.log(finalPriceNy(25.1))//depois acionamos ela com o valor do segundo parâmetro
console.log(finalPrice(0.0875)(21.7))//colocamos o parametro da função implicita ao lado do primeiro parâmetro
console.log(finalPrice(0.0875)(107.9))