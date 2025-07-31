//There is two two tools to test API testing 1) Postman 2) Hoppscoth
//Our first request
//using fetch fetch(url)
let url = "https://catfact.ninja/fact";
fetch(url)
  .then((res) => {
    console.log(res.json());
    console.log(response);
    res.json().then(data)=> {
      console.log(data);
    }
})
  .catch((err) => {
    console.log("ERROR-", err);
  });