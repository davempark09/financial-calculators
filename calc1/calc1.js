let rectArea = document.getElementById("rectArea");
let leng = document.getElementById("length");
let width = document.getElementById("width");
let placeHolder1 = document.getElementById("placeHolder1");

function calcOne (data) {
    data.preventDefault()
    let total = Number(leng.value) * Number(width.value);
    console.log(total);
    placeHolder1.innerHTML = "The area of the rectangle is: " + total;
}
console.log(rectArea)
rectArea.onsubmit = calcOne

