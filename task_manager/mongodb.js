// CRUD

const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");

dotenv.config();

const connectionURL = process.env.MONGODB_URL;
const databaseName = process.env.MONGODB_DATABASE;

const client = new MongoClient(connectionURL);
// const id = new ObjectId();

async function main() {
  try {
    await client.connect();

    const db = client.db(databaseName);

    // const result = await db.collection("users").insertOne({
    //   _id: id,
    //   name: "Vikram",
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

    // const result = await db.collection("tasks").insertMany([
    //   { description: "Clean the house", completed: true },
    //   { description: "Renew inspection", completed: false },
    //   { description: "Pot plants", completed: false },
    // ]);
    // console.log(result.insertedIds);

    // const task = await db
    //   .collection("tasks")
    //   .findOne({ _id: new ObjectId("69c27b77ab9720996584a9ec") });
    // console.log(task);

    // const tasks = await db
    //   .collection("tasks")
    //   .find({ completed: false })
    //   .toArray();
    // console.log(tasks);

    // await db
    //   .collection("users")
    //   .updateOne(
    //     { _id: new ObjectId("69c277369845832ca733c53e") },
    //     // { $set: { name: "Sami" } },
    //     { $inc: { age: 1 } },
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // await db
    //   .collection("tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // await db
    //   .collection("users")
    //   .deleteOne({ _id: new ObjectId("69c287c77a4fa2b0cc0e53d2") })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    await db
      .collection("users")
      .deleteMany({ age: 27 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Unable to connect to database!", error);
  } finally {
    await client.close();
  }
}

main();
