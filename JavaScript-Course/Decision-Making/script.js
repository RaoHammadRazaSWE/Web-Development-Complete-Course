const username = prompt('Please Enter user name:') || 'Rao';
// const userAge = +prompt('Please Enter Your Age:') || '0';
const userAge = parseInt(prompt('Please Enter Your Age:')) || '0';

console.log(`Name : ${username}`);
console.log(`Age : ${userAge}`);


// Check if the username or userAge is not provided or invalid
// if (!username) {
//     console.log('Name : Rao');
// } else {
//     console.log(`Name : ${username}`);
// }

// if (isNaN(userAge) || userAge === 0) {
//     console.log('Age : 0');
// } else {
//     console.log(`Age : ${userAge}`);
// }

if (userAge >= 0 && userAge <= 4){
    console.log(`${username} is a Kid.`);
    console.log('And He/She is playing and crying.');
}

else if (userAge >= 5 && userAge <= 18){
    console.log(`${username} is a collage Student.`);
    console.log('And He/She is learning computer science.');
}

else if (userAge >= 18 && userAge <= 40){
    console.log(`${username} is a working Professional.`);
    console.log('And He/She is a web developer.');
}

else if (userAge > 45){
    // Another method using 
    console.log(username+ ' is Retired on job.');
    console.log('And He/She is stay on Home and spend time Relative.');
}

else {
console.log('Please Enter a Valid Age');
}

console.log('Program Ended!!');


