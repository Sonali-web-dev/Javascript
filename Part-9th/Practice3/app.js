let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //console.dir(form);
  
  /*let inp = document.querySelector("input");
  let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");
  console.log(user.value);
  console.log(pass.value);
  alert(`Hi ${user.value}"), your password is ${pass.value}`);
  */
});


let user = document.querySelector("#user");

  user.addEventListener("change", function () {
    console.log("input caahnged");
    console.log("final value =", this.value)
  });