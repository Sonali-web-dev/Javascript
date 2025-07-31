let arr = [1, 2, 3, 4, 5];
let print = function (el) {
  console.log(el);
};
arr.forEach(print);
//ForEach function 
let array = [{
  name: "Sonali",
  marks: 87,
}, {
  name: "RB",
  marks: 90,
}, {
  name: "Pinki",
  marks: 90,
  }];
arr.forEach((student) => {
  console.log(student.marks);
});

// Map function 
let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * el;
});
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = nums.filter((e) => {
  return e % 2 == 0;//Even -> true , odd -> false
}) 

// Every method
[2, 4, 6].every((el) => el % 2 == 0);
//true
[2, 5, 8, 9].every((el) => el % 2 == 0);//false
// Some method
[2, 4, 6, 7, 3, 7].some((el) => (el % 2 == 0));
//true
[1, 3].some((el) => (el % 2 == 0));
//false

//Reduce function 
let number = [1, 2, 3, 4];
let finalVal = num.reduce((res, el) => res + el);
console.log(final);

//by uisng  Reduce function find maximum value of an array
let answer = arr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(max); 
//Practice Question to check evry number is multiple of 10 or not
let mul = [10, 20, 40, 60];
let anes = mul.every((el) => el % 10 == 0);
console.log(anes);

// Defoult value
function sum(a, b = 2) {
  return a + b;
}
let classmates = [1, 2, 4, 9, 0, 0, 43, 6, 8, 3, 4, 0];
Math.min(...classmates);
0
classmates.push(-2);
//13
//classmates
  //(13)[1, 2, 4, 9, 0, 0, 43, 6, 8, 3, 4, 0, -2]
Math.min(...classmates);
console.log(arr);
//VM945: 1(5)[1, 2, 3, 4, 5]
co+nsole.log(classmates)
//VM1043: 1(13)[1, 2, 4, 9, 0, 0, 43, 6, 8, 3, 4, 0, -2]
//undefined
console.log(...classmates);
//VM1154: 1 1 2 4 9 0 0 43 6 8 3 4 0 - 2
//undefined
let name = "Apna college"
console.log(...name);
//VM1301: 1 A p n a   c o l l e g e
undefined
let chars = [..."hello"];
console.log(...chars);
//VM1459: 1 h e l l o
//Use spread in object literals
let data = {
  email: "sonali.yv99@gmail.com",
  password:"abcd"
}
let dataCopy = { ...data, id: 123 };
//Rest 
function sum(...args) {
  for (let i = 0; i < args.length; i++){
    console.log("You gave us:", args[i]);
  }
  function min() {
    console.log(arguments);
  }
}

//Destructuring
let names = ["toy", "bruce", "Alica", "Peter"];
// let winner = names[0];
//let Runnerup = name[1];
let [winner, Runnerup, ...others] = names;
