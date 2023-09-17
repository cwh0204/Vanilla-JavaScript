const images = ["1.jpg", "2.jpg" ,"3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.width="100%"
document.body.appendChild(bgImage);
