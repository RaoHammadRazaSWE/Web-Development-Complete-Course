const container = document.querySelector('.container')

// Best method :

for(let i = 1; i <= 100; i++){
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`


    const paragraph = document.createElement('p')
    paragraph.innerText = i 

    imgContainer.append(newImage, paragraph)
    container.appendChild(imgContainer)
}


// Short Method :

// for(let i = 1; i <= 100; i++){
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container')

//     const myHTML = `
//             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" >
//             <p>${i}</p>
//     `
//     imgContainer.innerHTML = myHTML
//     container.appendChild(imgContainer)
// }


// Sub short Another Method :

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//     myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" >
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

const myImg = document.querySelector("body > div > div:nth-child(3)")