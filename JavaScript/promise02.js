//setTimeout(()=>{
//    console.log('Executando callback')
//
//    setTimeout(()=>{
//        console.log('Executando callback 22')
//    },2000)
//},2000)//a função executa o callback dps de 2000 segundos 

let esperarPor = (tempo = 2000)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("executaaaa")
            resolve()
        },tempo)
    })
}
//espera 2seg
esperarPor()
    //espera 2seg
    .then(()=> esperarPor())
    .then(esperarPor) //espera 2 seg