console.log('Hi-1');

function hello() {
    console.log('Hello World!');
}

for(let i = 0; i <=4; i++){
    console.log(i);
}
//    Call Back function
// setTimeout(function(){
//     console.log('Hi-3');
// }, 0)

hello()

setTimeout(hello , 0)

console.log('Hi-2');