const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=45,-75&units=f`;

const request = https.request(url, (response) => {
  let data = "";

  // response data arrives in chunks
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  // runs when all data has been received
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

// send the request
request.end();
