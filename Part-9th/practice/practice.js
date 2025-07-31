let para = document.createElement('p');
para1.innerText = "Hey I'm a new paragraph";
document.querySelector("body").append(para1);
paraclassList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "I am sonali yadav";
document.querySelector("body").append(h3);
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
h1.innerText = "I am a div";
para2.innerText = "Me too";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);
