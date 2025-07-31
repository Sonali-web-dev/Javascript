/*let num = [10, 20, 30, 50, 5];
let ans = num.every((el) => el % 10 == 0);
console.log(ans);

*/
// PQ => 2
let nums = [10, 20, 50, 70, 90];
let min = nums.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
console.log(min);