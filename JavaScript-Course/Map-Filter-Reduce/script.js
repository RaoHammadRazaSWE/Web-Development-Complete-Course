const months = ['January', 'February', 'March', 'April', 'May', 'December']

// Map

// const capitalMonths = months.map((months, index) => {
//     console.log(index + 1, months)
//     return months.toUpperCase()
// })

const capitalMonths = months.map((months, index, array) => {
    // console.log(index + 1, months)
    // console.log(array)
    return months.toUpperCase()
})

// Filter

// const filteredMonths = months.filter((months, index, array) => {
//     // console.log(months.length <= 5)
//     // console.log();
//     // console.log(array);

//     // Character length is blew five or just five
//     // return months.length <= 5

//     // character length is above five .
//     // return months.length > 5;

//     // show character m use many months :
//     console.log(months.toLocaleLowerCase().includes('m'))

//     return months.toLocaleLowerCase().includes('m')
// })


// const filteredMonths = months.filter((months, index, array) => {

//     // console.log(months.toLocaleLowerCase().includes('m'))
//     return index >= 3;
// })

// const students = [
//     {
//         name: 'Ali',
//         age: 14,
//     },
//     {
//         name: 'Rao',
//         age: 21,
//     },
//     {
//         name: 'Raza',
//         age: 18,
//     },
//     {
//         name: 'Amir',
//         age: 28,
//     },
// ]

// const adultStudents = students.filter((student) => {
//     return student.age >= 18
// }).map((students) => {
//     return students.name
// }).filter((students) => {
//     return students.includes('A')
// })

// console.log(adultStudents);


// const adultStudentsName = adultStudents.map((students) => {
//     return students.name
// })
