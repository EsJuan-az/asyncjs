function sum(a, b){
    return a + b;
}
function subs(a, b){
    return a - b;
}
function prod(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}
function calc(a, b, callback){
    return callback(a, b);
}
function greeting(name){
    console.log(`Hola ${name}`);
}


console.log(calc(2, 2, div));

setTimeout(function(){
    console.log("Hola Javascript");
}, 1000)

setTimeout(greeting, 1000, "Juanes")