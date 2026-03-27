const mongoose = require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("69c524938736258c1bbc93ef", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
