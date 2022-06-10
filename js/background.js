const images = [
    "img1.jpeg", 
    "img2.jpeg",
    "img3.jpeg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");
 
bgImage.src=`/Users/kyoorim/Desktop/nomadCoders/vanillaJS/chromeWeb/img/${chosenImage}`;

// console.log(bgImage);
document.body.appendChild(bgImage);