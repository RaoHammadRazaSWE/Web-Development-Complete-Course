const num1 = prompt ('Enter the First number : ')
const num2 = prompt ('Enter the Second number : ')
const num3 = prompt ('Enter the Third number : ')

if ( num1 >= num2 && num1 >= num3){
    console.log(' User input value no 1  is the largest number : ' + num1)
}

else if ( num2 >= num1 && num2 >= num3){
    console.log(' User input value no 2  is the largest number : ' + num2 )
}

else {
    console.log(' User input value no 3  is the largest number : ' + num3)
}