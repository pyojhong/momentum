const images = [
    "0.png", 
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.webp",
    "6.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);