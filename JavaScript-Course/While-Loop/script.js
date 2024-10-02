console.log('Program Started')

// let num = 0;

// while(num <= 10) {
//     console.log(num);
//     // num = num +1 ;
//     num++;
// } 

const friends = ['Rao', 'Ali', 'Hammad', 'Raza', 'Arif']

let i = 0;
while( i < friends.length){
    console.log(`${i + 1}. ${friends[i]}`);
    friends[i] = friends[i] + 'Coder'
    i++;

}
console.log('Program Ended')
