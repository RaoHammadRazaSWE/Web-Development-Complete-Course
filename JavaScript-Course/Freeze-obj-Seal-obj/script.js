const user = {
    firstName : 'Rao',
    lastName : 'Ali',
    pata: {
        city: 'Multan',
        pinCode: 45342,
        state: 'Pubjabe',
        moreDetails: {
            population: 349283282,
            area: '50032 sq km',
        },
    },
    age: 15,
    isGraduate: false,
}

// this is used Basically no changed any think in this code , this is used seal().
// Object.seal(user)

Object.freeze(user)

// Delate krna k liya.

// delete user .pata
