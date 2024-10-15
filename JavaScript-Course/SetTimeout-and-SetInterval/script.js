//  Settimeout:  Basically the settimeout is used to delay the code.
//  This delay can be minutes or seconds.

// setTimeout('console.log(true)', 10000)


setTimeout(`
    console.log('Hi')
    console.log("I am Rao")`, 1000)

const timer1 = setTimeout(`console.log("Hello Everyone 1")`, 2000)
const timer2 = setTimeout(`console.log("Hello Everyone 2")`, 0)
const timer3 = setTimeout(a, 4000, 'Ali')

// If you want to stop setTimeout uses blew code :

// ClearTimeout(timer2)

function a(){
    console.log('Hello World!');
}

console.log('Whats up ')

// Setinterval : basically setinterval use if user show any statement print many time .

// const timer4 = setInterval(`console.log("Hello Everyone 2")`,5000)

// If you want to stop setinterval uses blew code :

// clearInterval(timer4)


// Another use  setTimeout :

setTimeout(function()  {
    console.log('HI-420');
}, 0)

console.log('HI-302');

