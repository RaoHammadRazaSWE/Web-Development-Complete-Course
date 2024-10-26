const colors = ['red', 'green', 'yellow', 'pink', 'black']

// const colors1 = colors[0]
// const colors2 = colors[1]
// const colors3 = colors[2]

// This Destructuring from :

const [colors1, color2, colors3, o, i ] = colors

const { 3: color4, 5: color5 } = colors


// const [colors1, b] = colors 

const [,,,color3] = colors

const user = {
    name: 'Rao',
    age: 22,
    address: {
        city: 'Multan',
        state: 'Punjab',
    },
}

// const name = user.name
// const age = user.age


// const {name, age} = user

// const {name: username, age: userAge}  = user


// Multi leave Destructuring

// const { address: {city}} = user

function intro({age, name}){
    console.log(age, name);
}


// Intro (user)

function printColor({4: color5}){
    console.log(color5);
}

printColor(colors);