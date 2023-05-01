let triArea = document.getElementById("triArea");
let base = document.getElementById("base");
let height = document.getElementById("height");
let placeHolder1 = document.getElementById("placeHolder1");

function calcTwo (data) {
    data.preventDefault()
    let total = (Number(base.value) * Number(height.value)) / 2;
    console.log(total);
    placeHolder1.innerHTML = "The area of the triangle is: " + total;
}
console.log(triArea)
triArea.onsubmit = calcTwo

