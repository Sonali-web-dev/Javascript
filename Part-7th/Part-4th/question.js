/*for (let i = 15; i>=1; i = i-2){
  console.log(i);
}
  */
/*for (let i = 0; i <= 10; i = i + 2){
  console.log(i);
}
console.log("backwords");
for (let i = 10; i >= 2; i = i - 2){
  console.log(i);
}
  */
// FOR infinite loops in JS
/*for (let i = 1; ; i++)
{
  console.log(i);
}
  */
let n = prompt("Write your number:");
n = parseInt(n);
for (let i = n; i <= n * 10; i = i + n){
  console.log(i);
}

