const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const greetings = require("./routers/greetings");
const prospects = require("./routers/propsects");

dotenv.config();

// Import statements can go above^^^^
// Instantiation
const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// Define middleware functions
const logging = (request, response, next) => {
  console.log(`${Date.now()} ${request.method} ${request.url}`);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

// Using middleware
app.use(cors);
app.use(express.json());
app.use(logging);

app.use(greetings);
app.use(prospects);

// Configuring Express Instance

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app
  .route("/")
  .get((request, response) => {
    response.send(
      JSON.stringify({ message: "No GET routes available on root URI" }),
      404
    );
  })
  .post((request, response) => {
    response.send(
      JSON.stringify({ message: "No POST routes available on root URI" }),
      404
    );
  });

// Executing the Express app (This must ALWAYS be last)
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}`));
