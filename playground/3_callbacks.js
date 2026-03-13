setTimeout(() => {
  console.log("2 seconds!");
}, 2000);

// const names = ["Andrew", "Jen", "Jess"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

const geocode = (address, callback) => {
  setTimeout(() => {
    // simulates an async HTTP request (2s delay)
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data); // send the result back to the caller
  }, 2000);
};

geocode("Philadelphia", (data) => {
  console.log(data); // runs AFTER the 2s delay
});

// const add = (x, y, callback) => {
//   setTimeout(() => callback(x + y), 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum);
// });
