const num1 = [1,2,3,4]

// Rest Parameters basically use collect values.
// function add(...num1) {
//     console.log(num1);
//     let sum = 0;
//     for (let i = 0; i < num1.length; i++){
//         sum = sum + num1[i]
//     }
//     return sum
// }

function add(...num1){
    return num1.reduce((acc, curr) => acc + curr)
}

const result = add(...num1)