const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')


function sayHi() {
    console.log('HIHHIHIHHI');
}

// console.log(h1.onclick);

function secondSayHi() {
    console.log('Second Hi');
}

// 3rd Method. most useful .

// h1.addEventListener('click', sayHi)

// mager difference.

// h1.addEventListener('click', secondSayHi)


// h1.addEventListener('click', function(){
//     console.log('Second Hi');
// })

// Second Method.

// h1.onclick = sayHi


// First Method 

// function say(){
//     console.log('Hello whats up ');
// }

// Practices 

// Method no : 1.

// function Hello() {
//     console.log('Hello Bro');
// }

// card.addEventListener('click', Hello)

// Method no : 2.

// card.addEventListener('click', () => {
//     console.log('Hello Bro');
// })

let count = 1;

// card.addEventListener('click', () => {
//     // const newCard = document.createElement('div');
//     // newCard.classList.add('card');
//     newCard.innerText = count;
//     count++;
//     container.append(newCard);
// });

card.addEventListener('click', () => {
    const newCard = card.cloneNode()
    newCard.classList.remove('add-card') 
    console.log(newCard)
    newCard.innerText = count++;
    container.append(newCard);
});