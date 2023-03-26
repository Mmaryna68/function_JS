function sayHello() {
  console.log("Я учу JavaScript!");
}
const myButton = document.querySelector("#myButton");

myButton.addEventListener("click", () => {
  console.log("Я учу JavaScript!");
});

//Проверка високосного года
function checkLeapYear() {
  var year = document.getElementById("year").value;
  var result = document.getElementById("result");

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    result.innerHTML = year + " - високосный год."; //2024 - високосный год.
  } else {
    result.innerHTML = year + " - не високосный год."; //2023 - не високосный год.
  }
}
