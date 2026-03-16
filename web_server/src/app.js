const path = require("path");
const express = require("express");

const app = express();
const port = 3000;
publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
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
