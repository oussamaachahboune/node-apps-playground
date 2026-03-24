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

    // const result = await db.collection("users").insertOne({
    //   name: "Oussama",
    //   age: 23,
    // });
    // console.log(result.insertedId);

    // const result = await db.collection("users").insertMany([
    //   {
    //     name: "Ali",
    //     age: 23,
    //   },
    //   {
    //     name: "Aya",
    //     age: 25,
    //   },
    // ]);
    // console.log(result.insertedIds);

    const result = await db.collection("tasks").insertMany([
      { description: "Clean the house", completed: true },
      { description: "Renew inspection", completed: false },
      { description: "Pot plants", completed: false },
    ]);
    console.log(result.insertedIds);
  } catch (error) {
    console.log("Unable to connect to database!", error);
  } finally {
    await client.close();
  }
}

main();
