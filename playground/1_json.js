const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1_json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1_json.json"); // binary data
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const user = JSON.parse(fs.readFileSync("1_json.json").toString());
console.log(user);

user.name = "Oussama";
user.age = 23;
console.log(user);

fs.writeFileSync("1_json.json", JSON.stringify(user));
