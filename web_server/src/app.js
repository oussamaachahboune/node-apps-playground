const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = 3000;

// Define paths for Express config
publicDirectoryPath = path.join(__dirname, "../public");
viewsPath = path.join(__dirname, "../templates/views");
partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Oussama Achahboune",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Oussama Achahboune",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Oussama Achahboune",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Mostly cloudy",
    location: "Agadir",
  });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
