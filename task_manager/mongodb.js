// CRUD

const dotenv = require("dotenv");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

dotenv.config();

const connectionURL = process.env.MONGODB_URL;
const databaseName = process.env.MONGODB_DATABASE;

const client = new MongoClient(connectionURL);

async function main() {
  try {
    await client.connect();

    const db = client.db(databaseName);

    await db.collection("users").insertOne({
      name: "Oussama",
      age: 23,
    });
  } catch (error) {
    console.log("Unable to connect to database!", error);
  } finally {
    await client.close();
  }
}

main();
