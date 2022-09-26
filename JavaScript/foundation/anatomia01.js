function sayHello(){
    console.log("Hello");
}

sayHello();

function sayHelloTo(name){
    console.log(`Hello ${name}`);
}

sayHelloTo('Alexandre');

function sayHi(){
    return 'Hi'
}
let greeting = sayHi();
console.log(greeting);
console.log(sayHi());

function sayHiTo(name){
    return `Hi ${name}`
}

console.log(sayHiTo('Marcel'));