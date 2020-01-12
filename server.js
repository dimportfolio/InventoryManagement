const express = require("express");
const mongoose = require("mongoose")
const path = require("path");
const session = require("express-session");
const config = require("config")

//initialize express
const app = express();

//bodyparser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//provide db connection information
const db = config.get("mongoURI");

// connect to mongo
mongoose
  .connect(db, {useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

//use routes

app.use("/api/inventory", require("./routes/api/inventory"))
app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))

// Serve static assets when in production
if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}
const port = process.env.PORT || 5000;

// Binds and listens for connections on the specified host and port
// app.listen([port[, host[, backlog]]][, callback])
app.listen(port, () => console.log(`Server started on port ${port}`));