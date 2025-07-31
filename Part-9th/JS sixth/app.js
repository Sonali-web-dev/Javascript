/*function hello() {
  console.log("hello");
}
function printName() {
  console.log("IAS SONALI");
}
function print1to5() {
  for (i = 1; i <= 5; i++){
    console.log(i);
  }

}
print1to5();
function isadult() {
  age = 18;
  if (age >= 18) {
    console.log("A person is adult")
  }
  else {
    console.log("A person is not a adult")
  }
}
isadult();
*/


// Create a function to roll a dice
//Logic to generate a random numbers from 1 to 6

/*function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}
rollDice();
*/

// Functions with arguments
/*function printInfo(name,age) {
  console.log(`${name}'s age is ${age}`);
}
printInfo("sonali", 16);
printInfo("Komal");

function sum(a, b) {
  console.log(a + b);
}
sum(1, 3);
sum(45, 70);
*/

// Practice Question
function averageno(a,b,c) {
  average = (a + b + c) / 3;
  console.log(average);

}
averageno(3, 3, 3);

function printTable(n) {
  for (let i = n; i <= n*10; i +=n){
    console.log(i);
  }
}
printTable(3);

function sum(a, b) {
  console.log("hello");
  console.log("hello");
  return a + b;
  console.log("hello");
  console.log("hello");
}
console.log(sum(3, 4));

function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum +=i;
  }
  return sum;
}

//Create a function that returns the concatenation of all strings in an string
/*let str = ["Hi", "Hello", "bye", "!"];//output HiHellobye!
function concate(str) {
  let result="";
  for (let i = 0; i < str.length; i++){
    result += str[i];
  }
  return result;
  
}
  */
// Block scope only define inside the block
{
  a = 25;
  console.log(a); 
}
console.log();// It not print on the oytput screen becouse block keyword can't define

//Lexical scopee
function outerFun() {
  let x = 5;
  let y = 9;
  function innerFun() {
    console.log(x);
  }

}

//Practice question 
let greet = "hello";// global scope
function changeGreet() {
  let greet = "Namaste"; // Function scope
  console.log(greet);
  function innerGreet() {
    console.log(greet); // Texical scope
  }
}
console.log(greet);
changeGreet();
//Higher Order function #something wrong
function oddEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!n % 2 == 0);
    }
    
  }
  else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    }
  }
  else {
    console.log("Wrong function")
  }
}

// Calculator
num: 55;
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  }
};
  