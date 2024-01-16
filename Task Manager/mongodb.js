// CRUD
import mongodb from "mongodb";
import { error } from "console";
const { MongoClient, ObjectId } = mongodb;
const id = new ObjectId();
console.log(id);

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "Task-Manager";

MongoClient.connect(
  connectionURL,
  { useNewURLParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("users").findOne({ name: "Dang" }, (error, user) => {
      if (error) {
        return console.log("Unable to fetch");
      }

      console.log(user);
    });

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });

    db.collection("users").insertOne(
      {
        _id: id,
        name: "Dang",
        age: 19,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result.insertedId);
      }
    );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Dang",
    //       age: 19,
    //     },
    //     {
    //       name: "John",
    //       age: 20,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.insertedIds);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Study",
    //       completed: true,
    //     },
    //     {
    //       description: "Sleep",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert task");
    //     }
    //     console.log(result.insertedIds);
    //   }
    // );
  }
);
