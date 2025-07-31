let jsonRes = '{"fact":"Cats have 3 eyelids.","length":20}';
//console.log(jsonRes.fact);
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
let student = {
  name: "sonali",
  marks: 90,
};