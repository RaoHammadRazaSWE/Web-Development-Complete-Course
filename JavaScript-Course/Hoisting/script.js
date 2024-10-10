// Basically hosting says that we are using a variable before declaring
// it and it is not giving us any error.

console.log(username)

var username = 'Rao'

hi()

// Function Definition : 1


// Function Declaration

function hi() {
    console.log('Hello')
}

// Function Definition : 2
// Function Expression

var sayHi = function() {  // Anonymous function
    console.log('Whats up')
}