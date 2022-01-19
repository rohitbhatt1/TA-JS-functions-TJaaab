/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

function sayHello(name) {
  alert(`Hello ${name}`);
}
sayHello(`john`);
sayHello(`Rohit`);

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName,lastName) {
  let fullName = firstName + " " + lastName;
  return alert(fullName);
}
getFullName("John", "Snow"); 
getFullName("Nelson", "Mandela");

/*
other style
function getFullName(firstName,lastName) {
  return firstName+lastName
}
 let fullName = getFullName(`rahul`,`Sharma`);

*/
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers() {
  let firstNum = +prompt("Enter a firstNUm");
  let secondNum = +prompt("ENter a SecondNum");

  if(isNaN(firstNum) === false && isNaN(secondNum) === false){
   alert( firstNum + secondNum)}else {
   alert(`Enter a Valid Input`);}
}
addTwoNumbers();


/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function cacl() {
  let numA = +prompt(`Enter a first Number`);
  let numB = +prompt(`Enter a first Number`);
  let operation = prompt(`Enter a operation(-,+,*,/)`);
if(isNaN(numA) === false && isNaN(numB) === false) {
switch(operation){
    case "-":
    return alert(`numA - numb`);
    break;
    case "+":
    return alert(`sum is ${numA + numB}`);
    break;
    case "*":
    return alert(`Multiplication is ${numA * numB}`);
    break;
    case "/":
    return  alert(`Divisions is ${numA / numB}`);
    break;

} 
}
else{
 alert(`Enter a Valid Input`);
}



}
cacl();


/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isLeapYear() {
  let year = +prompt(`Enter a Year`);
  if(year % 100 === 0){
    return alert(`true`);
  } else if(year % 400 === 0 || year % 4 === 0) {
    return alert(`${year} is Leapyear`);
 }else {
    return alert(`false`);
  }
}
let print = isLeapYear();
alert(print);


/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

