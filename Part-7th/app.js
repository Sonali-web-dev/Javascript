// use of "this" keyword
/*const student = {
  name: "sonali",
  age: 19,
  eng: 98,
  maths: 80,
  physics: 79,
  getAvg() {
    console.log(this);
    let avg = (this.eng + this.maths + this.physics) / 3
    console.log(avg);
  }
}
console.log(student);
console.log(student.name);

*/

//try & catch
/*console.log("hello");
console.log("hello");
try {
  console.log(a);
}
catch(e) {
  console.log("Cought an error 'a' is not define");
  console.log(e);
}
console.log("hello");
console.log("hello");
*/

// Arrow Functions
const mul = (a, b) => {
  console.log(a * b);
};

const cube = (n) => {
  console.log(n * n * n);
};
const pow = (a, b) => {
  return a ** b;
};
//Implicit return 
const sub = (a, b) => a - b;

//SetTimeout function

/*console.log("Hi there");
setTimeout(() => {
  console.log("Apna college");
}, 4000);
console.log("WElcome to");

//Set interval 
*/
/*let id = setInterval(() => {
  console.log("Apni journey");
}, 4000);
console.log(id);*/

//"this" keyword with arrow function
const student = {
  name: "Sonali",
  age: 17,
  marks: 95,
  prop: this,// Global scope
  getName: function () {
    return this.name;
  },
  getMarks: () => { // Parent  scope
    return this.marks;
  }
};

//Practice Quetion
const square = (n) => {
  return n * n;
}

// PS-2
let id = setInterval(() => {
  console.log("Hello World")
}, 2000);
setTimeout(() => {
  clearInterval(id);
  console.log("Clear interval run");
}, 10000);
