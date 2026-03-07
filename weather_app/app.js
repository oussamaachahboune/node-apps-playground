const request = require("postman-request");
const dotenv = require("dotenv");

dotenv.config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=37.8267,-122.4233&units=f`;

request({ url: url, json: true }, (error, response) => {
  // automatically parses response as JSON
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degress out. It feels like " +
      response.body.current.feelslike +
      " degress out.",
  );
});
