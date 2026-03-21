console.log("Client side JS file is loaded!");

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

fetch("http://localhost:3000/weather?address=agadir").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
