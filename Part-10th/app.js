let btn = document.querySelectorAll("button");
//console.dir(btn);
for (btn of btns) {
  //btn.onclick = sayHello;
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
    
  }

//btn.onclick = function () {
  //console.log("button was clicked");
//}
function sayHello() {
  alert("Hello!");
}

function sayName() {
  alert("Apna college");
}
