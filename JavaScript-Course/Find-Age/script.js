// User's brithdate

let brithdate = new Date(2001, 9, 5);

// Today's date
let today = new Date();

// Calculate the age

let age = today.getFullYear() - brithdate.getFullYear();
let monthDiff = today.getMonth() - brithdate.getMonth();
let dayDiff = today.getDate() - brithdate.getDate();

if(monthDiff < 0 || (monthDiff == 0 && dayDiff < 0)) {
    age--;
}
console.log(age);
console.log(monthDiff);
console.log(dayDiff);