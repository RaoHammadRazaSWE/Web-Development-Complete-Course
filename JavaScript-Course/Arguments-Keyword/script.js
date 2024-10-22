// function add(a, b) {
//     return a + b;
// }

// function add() {
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }

//     return sum
// }

// const add3 = function add() {
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }

//     return sum
// }

// Convert Array  Method :

const add3 = function add() {
    const argsArray = Array.from(arguments);
    return argsArray.reduce((sum, current) => sum + current, 0);
}
