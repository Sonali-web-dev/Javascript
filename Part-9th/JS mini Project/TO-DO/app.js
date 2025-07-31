let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

// Event delegation for delete functionality
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    let item = event.target.parentElement; // Get the parent <li> of the button
    ul.removeChild(item);
  }
});