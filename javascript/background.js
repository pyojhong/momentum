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

// HTML 태그 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);