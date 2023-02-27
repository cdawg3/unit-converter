const inputBox = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")
const converterOne = document.getElementById("result1")
const converterTwo = document.getElementById("result2")
const converterThree = document.getElementById("result3")

convertBtn.addEventListener("click", function() {
    let toConvert = inputBox.value;
    converterOne.textContent = length(toConvert)
    converterTwo.textContent = volume(toConvert)
    converterThree.textContent = mass(toConvert)
})

function length(int) {
    let feet = (int * 3.281).toFixed(3)
    let meters =(int / 3.281).toFixed(3)
    return `${int} meters = ${feet} feet | ${int} feet = ${meters} meters`
}

function volume(int) {
  let gallons = (int * 0.264).toFixed(3);
  let liters = (int / 0.264).toFixed(3);
  return `${int} liters = ${gallons} gallons | ${int} gallons = ${liters} liters`;
}

function mass(int) {
  let pounds = (int * 2.204).toFixed(3);
  let kilograms = (int / 2.204).toFixed(3);
  return `${int} kilos = ${pounds} pounds | ${int} pounds = ${kilograms} kilos`;
}