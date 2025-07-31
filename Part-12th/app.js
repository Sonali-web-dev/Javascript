// Create an aync function we can "async" before normal function it returns promise
/*async function greet() {
  throw "some random error";
}

greet()
  .then((result) => {
    console.log("Promise was rejected with err:", err);
    console.log("result was:", result);
  })
  .catch((err) => {
    console.log("Promise was rejected with err:", err);
  });
  //We can also use async function in arrow function

let demo = () => {
  return 5;
};
*/

// Await keyword pauses the execution of its surrounding async function until the promise is resolved or rejected


/*function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  getNum();
  getNum();
  getNum();
}
  */
h1 = document.querySelector("h1");
 
function changeColor(color,delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("Promise rejected");
      }
      h1.style.color = color;
      resolve();
    }, delay);
  });
}
async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("purple", 1000);
    await changeColor("pink", 1000);
    await changeColor("orange", 1000);
    await changeColor("black", 1000);
    await changeColor("white", 1000);

  } catch (err) {
    console.log("error cough");
    console.log(err);
  }
  
  let a = 5;
  console.log(a);
  console.log("new number = ", a + 3);
}
//Await keyword

//Handling Rejections with await 

