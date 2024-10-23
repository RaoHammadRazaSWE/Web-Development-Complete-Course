// Reduce :

const nums = [1,2,3,4,5,6]

// Acc means Accumulator

const sum = nums.reduce((accumulator, current, index) => {
    // console.log(index, current);
    console.log(accumulator , current);
    return accumulator + current
}, 10) // Rao this is initalisation value if user not put value then start one if user put value then start 0