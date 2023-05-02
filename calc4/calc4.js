let colorForm = document.getElementById("colorForm");
let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let bodyCont = document.getElementById("specialColor");

let randomButton = document.getElementById("randomButton");

function changeColor (event) {
    event.preventDefault();
    console.log(red.value)
    console.log(green.value)
    console.log(blue.value)
    bodyCont.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}


function randomColor (event) {
    event.preventDefault();
    let redRand = Math.floor(Math.random() * 256);
    let greenRand = Math.floor(Math.random() * 256);
    let blueRand = Math.floor(Math.random() * 256);
    console.log(redRand);
    console.log(greenRand);
    console.log(blueRand);
    bodyCont.style.background = `rgb(${redRand}, ${greenRand}, ${blueRand})`;
}

colorForm.onsubmit = changeColor;

randomButton.onclick = randomColor;