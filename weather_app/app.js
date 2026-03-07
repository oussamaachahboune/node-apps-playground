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

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
