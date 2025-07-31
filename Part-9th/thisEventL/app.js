/*This is a "this"event Listener -> When 'this is used ina a callback of event handler of something , it refers to that something*/
/*let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
btn.addEventListener("click", function () {
  console.dir(this.innerText); // this refers to the button element itself
  this.style.backgroundColor = "blue"; // this refers to the button element itself
});
h1.addEventListener("click", function () {
  console.die(this.innerText);
  this.style.backgroundColor = "pink";
});
p.addEventListener("click", function () {
  console.dir(this.innerText);
  this.style.backgroundColor = "purple"
});
h3.addEventListener("click", function () {
  console.dir(this.innerText);
  this.style.backgroundColor = "green";
});

*/

/*NOW TO RESTRUCTURE THIS CODE to remove redundancy */
let btn = document.querySelector("button");
let h1 = DocumentFragment.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "pink";
}
btn.addEventListener("Click", changeColor);

h1.addEventListener("Click", changeColor);

h3.addEventListener("Click", changeColor);

p.addEventListener("click", changeColor);

