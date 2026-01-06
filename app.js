//  Question No 1    //

var productName = "laptop";
var productPrice = 999.99;
var productInStock = true;
console.log(productName);
console.log(productPrice);
console.log(productInStock);

//  Question No 2   //

var remainder = 27 % 4;
console.log(remainder);
var square = 12 * 12;
console.log(square);
var increment = 8;
increment++;
console.log(increment);
var decrement = 15;
decrement -= 2;
console.log(decrement);

//  Question No 3  //

var firstName = "alex SMITH";
console.log('Alex Smith');
console.log(firstName.length);

//  Question No 4  //

var temperature = 25;
if (temperature > 30) {
    console.log('Hot Day');
}
else if (temperature > 20) {
    console.log('Pleasant Day');
}
else (console.log('Cold Day'));

//  Question No 5   //

var check = 15 === '15';
console.log(check);
var checker = 20 > 15 && 20 < 25;
console.log(checker);
var checked = 10 !== 10 || 5 > 3;
console.log(checked);

//  Question No 6   //

var arr = ["red", "green", "blue"];
arr.push("yellow");
arr.shift();
arr.splice(1, 0, "purple");
console.log(arr);
console.log(arr.length);

//  Question No 7   //

var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");
var MiddleFruits = fruits.splice(1, 3);
console.log("Middle fruits:", MiddleFruits);
console.log("Remaining fruits:", fruits);

//  Question No 8   // 

let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
     console.log(i);
    sum = sum + i;
}
console.log("Sum of printed numbers:", sum);

//  Question No 9   // 

for (var i=0;i<5;i++){
    var star = "";
    for (var j=0;j<=i;j++){
        star=star + "*";
    }
    console.log(star);   
}

//  Question No 10   // 

var text = "The quick brown fox jumps over the lazy dog";

console.log("Position of 'fox':", text.indexOf("fox"));

console.log("Extracted text:", text.substring(10, 19));

console.log("Contains 'dog':", text.includes("dog"));

console.log("Character at position 10:", text.charAt(10));

//  Question No 11   // 

let sentence = "I love JavaScript and JavaScript is awesome";

sentence = sentence.replace("JavaScript", "coding");

sentence = sentence.replaceAll("JavaScript", "JS");

sentence = sentence.replace("awesome", "AWESOME");

console.log(sentence);

//  Question No 12   //

var num = 123.456789;

console.log("Round to 2 decimals:", num.toFixed(2));
console.log("Round to nearest integer:", Math.round(num));
console.log("Floor value:", Math.floor(num));
console.log("Ceil value:", Math.ceil(num));
console.log("Exactly 4 decimals:", num.toFixed(4));

//  Question No 13   //

console.log(Math.floor(Math.random() * 100) + 1);

console.log(Math.random().toFixed(3));

console.log((Math.random() * 25 + 50).toFixed(2));

//  Question No 14   //

console.log(Number("123"));        
console.log(parseFloat("45.67")); 
console.log(String(789));         
console.log(Boolean("true"));      

//  Question No 15   //

var now = new Date();

console.log(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());

var year = now.getFullYear();
var month = now.getMonth() + 1; 
var day = now.getDate();

console.log(year + "-" + month + "-" + day);

console.log(new Date(2024, 11, 25));

//  Question No 16   //


var  num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
   var operator= prompt("Enter an operator (+, -, *, /):");

    
function calculate(a, b, op) {
  switch(op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Error: Division by zero" : a / b;
    default: return "Invalid operator";
  }
}

//  Question No 17   //


alert("Result: " + calculate(num1, num2, operator));

var globalCounter = 0;

function incrementCounter() {
  var globalCounter = 0;  
  globalCounter++;         
  console.log("Local:", globalCounter);

  window.globalCounter++;  
  console.log("Global:", window.globalCounter);
}

incrementCounter();
incrementCounter();

console.log("Final Global:", globalCounter);

//   Queston 18   //

var dayNumber = 3;

var dayName;

switch(dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(dayName); 

//   Queston 19   //

var i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

console.log("Blast off!");




//   Queston 20   //

var enteredPassword = "";
var attempts = 0;

do {
  enteredPassword = prompt("Enter password:");
  attempts++;

} while (enteredPassword !== "secret123" && attempts < 5);

if (enteredPassword === "secret123") {
  alert("Access granted");
} else {
  alert("Too many attempts");
} 

//   Queston 21    //

var numbers = [12, 45, 78, 23, 56, 89, 34];


var max = numbers[0];
for (var i = 1; i < numbers.length; i++)
  if (numbers[i] > max) max = numbers[i];
console.log("Max:", max);

  var hum = 0;
for (var i = 0; i < numbers.length; i++) sum += numbers[i];
var avg = hum / numbers.length;
console.log("Average:", avg);

var gt50 = [];
for (var i = 0; i < numbers.length; i++)
  if (numbers[i] > 50) gt50.push(numbers[i]);
console.log("Greater than 50:", gt50);


var rev = [];
for (var i = numbers.length - 1; i >= 0; i--)
  rev.push(numbers[i]);
console.log("Reversed:", rev);





//   Queston 22   //

function handleClick() {
  var user = document.getElementById("username").value;

  if (user === "") {
    alert("Username is required");
  } else {
    document.getElementById("greeting").innerHTML =
      "Welcome, " + user + "!";
    document.getElementById("username").value = "";
  }
}


//   Queston 23   //
function validateForm(email, password) {

  if (email.indexOf("@") === -1) {
    console.log("Error: Email must contain @");
    return false;
  }

  if (password.length < 8) {
    console.log("Error: Password must be at least 8 characters");
    return false;
  }

  return true;
}      

//   Queston 24   //

function convertTemperature(temp, unit) {
  var result;

  if (unit === "C") {
    result = (temp * 9 / 5) + 32;
  } else if (unit === "F") {
    result = (temp - 32) * 5 / 9;
  }

  return result.toFixed(1);
}

//   Queston 25   //

var cart = [];

function addItem(name, price) {
  cart.push({ name: name, price: price });
}

function removeItem(name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
}

function calculateTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}

function applyDiscount(percent) {
  return calculateTotal() - (calculateTotal() * percent / 100);
}

function listItems() {
  var names = [];
  for (var i = 0; i < cart.length; i++) {
    names.push(cart[i].name);
  }
  return names;
}     








   







