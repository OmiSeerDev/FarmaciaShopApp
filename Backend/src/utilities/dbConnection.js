const mongoose = require("mongoose");

const dbUri = process.env.DATABASE_URI;
const mongooseOptions = {
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  serverSelectionTimeoutMS: 30000,
};

mongoose.connection.once("open", () => {
  console.info("Connected to MongoBD");
});
mongoose.connection.once("error", (error) => {
  console.error(
    `An error has occurred during connection: ${JSON.stringify(
      error,
      Object.getOwnPropertyNames(error)
    )}`
  );
});

mongoose.connection.on("reconnected", () => {
  console.info("Reconnected to MongoDB");
});

mongoose.connection.on("disconnected", (error) => {
  console.error("Disconnected from MongoDB", error);
});

mongoose.connection.on("reconnectFailed", (error) => {
  console.error("MongoDB reconnection failed", error);
});

mongoose.connection.on("close", () => {
  logger.info("Connection to MongoDB closed");
});

const init = () => {
  console.info("Initializing connection to MongoDB...");

  mongoose
    .connect(dbUri, mongooseOptions)
    .catch((error) =>
      console.error(JSON.stringify(error, Object.getOwnPropertyNames(error)))
    );
};
module.exports = {
  init,
};
