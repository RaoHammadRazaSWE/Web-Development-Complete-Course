// 'use strict'

const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// It is difficult method

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log('Some Fruits Name :')

// Easy Method :

// for(const fruit of fruits) {
//     console.log(fruit)
// }

// const user = 'Rao Hammad Raza'

// for(const letter of user) {
//     console.log(letter);
// }

// Basically For in loop uses object
const person = {
    firstName: 'Rao',
    lastName: 'Raza',
    aga: 23,
    city: 'Multan'
}

// This is high :

// for(const key in person) {
//     console.log(key,':', person[key]);
// }

// This is fact method :

const person_keys = Object.keys(person) 

for (const key of person_keys) {
    console.log(key, ':', person[key]);
}

// const personValues = Object.values(person) 
// const personEntries = Object.entries(person) 

