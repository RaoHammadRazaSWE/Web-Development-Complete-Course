const num1 = [1,2,3,4,5]

const num2 = [1,6,7,8,9]

// Spread Operator basically use value spread .

// const myName = 'Rao Hammad Raza'

// const joinedArray = [...num1,...num2,...myName]

const joinedArray = [...num1,...num2, 10, 11, 12]

// const user = {
//     name: 'Rao',
//     age: 23,
// }

// const updatedUser = {...user, city: 'Multan'}

// console.log(updatedUser)

// function add(){
//     console.log(arguments);
// }


function add(){
    console.log(arguments);
    let sum = 0

    for( let i = 0 ; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }

    return sum
}