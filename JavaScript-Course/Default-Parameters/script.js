// Basically Default-Parameters is undefined value ko overRight krta hai.

function multiply (a, b = 1) {
    // debugger
    return a * b
}

function rollADie(numberofside  = 6) {
    // Odd Mathod 
    // if(numberofside === undefined){
    //     numberofside = 6
    // }
    return Math.floor(Math.random() * numberofside) + 1
}