
/*h1 = document.querySelector("h1");
//Imagine fake database by making an function
function savetoDb(data,success,failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    console.log("data was saved");
    success();
  }
  else {
    failure();
  }
}
savetoDb("Apna college", () => {
  console.log("success: Your data was saved successfully");
  savetoDb("Hello world")
},()=> {
  console.log("failure: weak connection.Data not saved")
})
*/
//<h1>Promises and asyncs use to reduce the problem of callBack hell</h1>
//<h2>The promise objects to represents the eventualand completion(or failure)of an asynchronous operation and its resulting value</h2>
// Promise -> object
//resolve and reject resolve means success and reject means failure
function savetoDb(data ){
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success("success: Data was saved");
    } else {
      failure("failure:Weak connection");
    }
  });
}
//Promise are two types fulfilled and rejected fulfilled means .then and rejected means .catch
let request = savetodB("Apna college"); //req = this is a promise object
request.then(() => {
  console.log("Promise was resolved");
})
  .catch(() => {
    console.log("Promise was rejected");
    console.log(request);
  });
  
//Promises Chaining
  
