const dayNumber = 5

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

switch (dayNumber) {
    case 0: 
    console.log('It is Sunday Today')
    break;
    case 1: 
    console.log('It is Monday Today')
    break;
    case 2: 
    console.log('It is Tuesday Today')
    break;
    case 3: 
    console.log('It is Wednesday Today')
    break;
    case 4: 
    console.log('It is Thursday Today')
    break;
    case 5: 
    console.log('It is Friday Today')
    break;
    case 6: 
    console.log('It is Saturday Today')
    default:
        console.log('Please Enter a Valid Day Number.')
}
console.log('Program Ended!');
