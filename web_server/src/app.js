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
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  res.send({
    forecast: "Mostly cloudy",
    location: "Agadir",
    address: req.query.address,
  });
});

// app.get("/products", (req, res) => {
//   if (!req.query.search) {
//     return res.send({ error: "You must provide a search term" });
//   }

//   console.log(req.query.search);
//   res.send({
//     products: [],
//   });
// });

app.get("/help/*splat", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Oussama Achahboune",
    errorMessage: "Help article not found.",
  });
});

app.get("/*splat", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Oussama Achahboune",
    errorMessage: "Page not found.",
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
