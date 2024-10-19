// function a(b) {
//     console.log('Rao');
// }

// a('Rao')

// function sayHi () {
//     console.log('Hello Everyone');
// }

// const x = sayHi;

// x.age = 20;

// Higher order function : IF user pass function with in a function in
// pass function is called Higher order function in this function a is
// higher order.

function a(b) {
    console.dir(b);
    b()
}

// Anonymous function

// Under bracket Function  is called Callback Function : IF user pass function
// with in a function the pass function is called callback function.

a(function sayHi () {
    console.log('Hello Everyone');
})

// function sayHi () {
//     console.log('Hello Everyone');
// }

// a(sayHi)