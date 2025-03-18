let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", "./images/dice" + randomNumber1 + ".png")

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src", "./images/dice" + randomNumber2 + ".png")

let header = document.querySelector("h1");

if(randomNumber1 === randomNumber2) {
    header.innerText = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    header.innerText = "🚩 Player 1 wins! "
} else {
    header.innerText = "Player 2 wins! 🚩"
}