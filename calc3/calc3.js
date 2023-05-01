let trapArea = document.getElementById("trapArea");
let topBase = document.getElementById("topBase");
let botBase = document.getElementById("botBase");
let height = document.getElementById("height");
let placeHolder1 = document.getElementById("placeHolder1");

function calcThree (data) {
    data.preventDefault()
    let total = ((Number(topBase.value) + Number(botBase.value))/2)*Number(height.value);
    console.log(total);
    placeHolder1.innerHTML = "The area of the trapezoid is: " + total;
}
console.log(trapArea)
trapArea.onsubmit = calcThree

