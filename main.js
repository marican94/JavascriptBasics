/*
function testAlert(message) {
    alert(message)
}

testAlert("Test 1 2 3")

testAlert(4 + 5)

console.log("Hello 2025")

document.getElementById("greeting").innerHTML = "Hello World"
*/

document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");    
})

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");   
})

const customer = "John";
let balance = 1000;
console.log("Hello, "+ customer + " your balance is: " + balance);

balance = balance + 200;

console.log("Hello, "+ customer + " your new balance is: " + balance);