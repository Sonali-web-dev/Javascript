let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor(); // Call the function once and store the result
  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor; // Use the stored color

  console.log("color updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}