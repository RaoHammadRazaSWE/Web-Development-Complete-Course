// Function Definition

// Method no 1.
//                       Default Parameters
// function introduceMe(username = 'Rao Hammad Raza') {

// Method no 2.

function introduceMe(username, profession, Age) {

// Old Method :
// function introduceMe(username) {
    // if(!username){
    //     username = 'Rao Hammad Raza';
    // }

    console.log("Hi");
    // Method no 1.
    // console.log(`My name is ${username}.`);
    // Method no 2.
    console.log(`My name is ${username || 'Rao Hammad Raza'}.`);
    console.log(`I am a ${profession || 'Software Engineer'}.`);
    console.log(`I am ${Age || 23} years old.`);

    // return 123;
}

//                  Function Call
// const returnValue = introduceMe()

introduceMe('Rao', 'Front-End-Developer', 22)
console.log('*********')
introduceMe('RHR', 'Web Developer', 21)
console.log('*********')
introduceMe('Hammad', 'Data Analysis',20)
console.log('*********')
introduceMe('Raza', 'Graph Designer', 19)
console.log('*********')
introduceMe()