/*let btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  console.log(event);
  console.log("button click");
});
*/
/*btn.addEventListener("dbclick", function (event) {
  console.log(event);
  console.log("button double click");
});
*/

// To take input 

let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
  console.log( key = event.key);
  console.log(code = event.code);
  console.log("Key was pressed");
});

/*inp.addEventListener("keydown", function (event) {
  console.log("Key Was Pressed");
});
*/