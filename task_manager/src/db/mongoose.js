const mongoose = require("mongoose");

const mongodbUrl = process.env.MONGODB_URL;

if (!mongodbUrl) {
  console.warn("MONGODB_URL is not set; skipping MongoDB connection.");
} else {
  mongoose.connect(mongodbUrl).catch((error) => {
    console.error("Unable to connect to MongoDB:", error.message);
  });
}
