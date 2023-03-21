import mongoose from "mongoose";

const MONGO_CONNECTION_STRING =
  "mongodb+srv://ermun:0303@akre.6mutaab.mongodb.net/test";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });

export default mongoose.connection;
