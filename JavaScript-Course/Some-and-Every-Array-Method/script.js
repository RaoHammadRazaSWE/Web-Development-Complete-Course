const evenNumbers = [0,2,3,4,6,8]

// evenNumbers.some((num, i, array) => {
//     console.log(num, i, array);
// })

// const result = evenNumbers.some((num) => {
//     return num > 4
// })

// Check Odd number 

// const result = evenNumbers.some((num) => {
    // if (num % 2 === 1){
    //     console.log(i);
    // }
//     return num % 2 === 1 
// })

// Check Even number 

// const result = evenNumbers.some((num) => {
//     return num % 2 === 0
// })


const result = evenNumbers.every((num) => {
    return num % 2 === 0
})
