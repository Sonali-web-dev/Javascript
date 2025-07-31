/*function hello() {
  console.log("Hello, world!");
}
function demo() {
  console.log("calling hello function");
  hello();
}

console.log("Calling demo function");
demo();
console.log("done,bye!");*/

// visualizing the call Stack function

/*function one() {
  return 1;
} 
function two() {
  return one() + one();
}
function three() {
  let ans = two() + one();
  console.log(ans);
}
three(); 

*/

// JS is single threaded language==> synchronous in nature
//let a = 20;
//console.log(a);
//let b = 10;
//console.log(a + b);

// Java is single thraeded but multithreading done by browser settimeout function execute by browser
//Asynchronus nature of JS

/*setTimeout(() => {
  console.log("Apna college");
}, 2000);
console.log("hello....")
*/
/*h1 = document.querySelector("h1");
  setTimeout(() => {
    h1.style.color = "red";
  }, 2000);
// Pass a setTimeout function
//h1.style.color = "red";
setTimeout(() => {
  h1.style.color = "blue";
}, 3000);
setTimeout(() => {
  h1.style.color = "green";
}, 4000);
*/

//To implement the color again and again we make the function => to reduce the complexity 

//do nesting changeColor function
h1 = document.querySelector("h1");
function changeColor(color, delay) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}
//This type of nesting is known as callBack hell mainly this is a problem in js so we use promise and async await to solve this problem
changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("blue", 1000, () => {
      changeColor("pink", 1000, () => {
        changeColor("magenta",1000)
      })
    })
  });
});
//changeColor("blue", 3000);
//changeColor("green", 4000);
