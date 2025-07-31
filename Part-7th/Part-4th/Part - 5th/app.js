/*const student={
  name: "sonali yadav",
  age: 20,
  marks:95
}
/*let post = {
  likes: 299,
  username: "@sonaliyadav",
  comments: ["nice", "interesting", "Welcome to my channel"]
}
  
obj = {
  1: "a",
  2: "b",
  3: "c",
  null: "d",
  true: "e",
  undefined: "f"
}
// to add/update or access the values in object literals 
 // suppose we want to s in the place of c so we can use obj.3 = s and for changment use same syntax*/

//Object of objects(Nesting)
/*student = {
  pinki: {
    grade: "A",
    City: "MUmbai",
    age:45,
  },
  sonali: {
    grade: "A",
    City: "Mumbai",
    age:20
  },
  Sangu: {
    grade: "A",
    City: "DElhi",
    age:45
  }
}
 
 */

/*const MovieInfo = [
  {
    name: "Sonali",
    personality: "Awasome",
    IQ:"INtelligent",
    
  },
  {
    name: "Doremon",
    Personality: "Awasome",
    IQ:"<sonali"
  },
  {
    name: "nobita",
    Personality: "Gorgeous",
    IQ:"<Doremon"
  },
]
// After this some discussion based on maths power function
*/

// Guessing Number game
let max = prompt("Enter the maximum number:");
console.log(max);
const random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess = prompt("Enter the guessing number");
while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == random) {
    console.log("You are right congrats!");
    break;
  } else if (guess < random) {
    guess=prompt("Your guess are too small please try again")
  }
  else if (guess > random) {
    guess = prompt("Your guess is too large! Please try again")
      
    }
  else {
    guess = prompt("Your guess was wrong . Please try again");
  }
}
