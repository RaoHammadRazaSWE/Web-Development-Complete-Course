const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
// const firstImage = document.querySelector("img")
// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

const  paragraph = document.createElement('p')
// paragraph.innerText = 'Hello'
// paragraph.classList.add('my-para')

// paragraph.id = 'Rao'
// container.append(paragraph)


// for (let i = 2; i <=200; i++) {
//     const newImg = firstImage.cloneNode()
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImg)
// }

for (let i = 2; i <=200; i++) {
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(newImg)
}

// const newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
// container.append(newImage)

