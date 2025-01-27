// part 1
// question 1
let string = "Hello World!";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { key: "value" };

console.log("string:", string,"(Type:", typeof string,")");
console.log("number", number, "(Type:", typeof number,")");
console.log("boolean", boolean, "(Type:", typeof boolean,")");
console.log("array", array, "(Type:", typeof array,")");
console.log("object", object, "(Type:", typeof object,")");


// question 2
function simpleCalculator(){
    let first_number = parseFloat(prompt("Enter first number"));
    let second_number = parseFloat(prompt("Enter second number"));
    let operation = prompt("Choose an operation: +, -, *, /");

if (operation === "+") {
  console.log("Result: ",Number(first_number) + Number(second_number));
} else if (operation === "-") {
  console.log("Result: ",Number(first_number) - Number(second_number));
} else if (operation === "*") {
  console.log("Result: ",Number(first_number) * Number(second_number));
} else if (operation === "/") {
  console.log("Result: ",Number(first_number) / Number(second_number));
} else {
  console.log("Invalid operation");
}
}

simpleCalculator();

// question 3
const user = document.getElementById("demo");

function greetUser(){
    let name = prompt("Enter your name");
    user.innerHTML = "Hello " + name + "!";
}

greetUser();

// part 2
// question 4
const age = prompt("Enter your age");
const ageMessage = document.getElementById("age-message");

if (age < 18) {
    ageMessage.innerHTML = "Not legal age to vote";
    } else {
    ageMessage.innerHTML = "You are eligible to vote";
    }

// question 5
const list = document.getElementById("list");

for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
}

// question 7
const h1 = document.getElementById("heading1");
h1.innerHTML = "JavaScript in Action!";

const div = document.getElementById("dynamic-content");
const p = document.createElement("p");
p.innerHTML = "This content was added dynamically using JavaScript.";
div.appendChild(p);