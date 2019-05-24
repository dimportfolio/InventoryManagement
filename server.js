const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const path = require("path");
const session = require("express-session");


const inventory = require("./routes/api/inventory")

//initialize express
const app = express();

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//provide db connection information
const db = require("./config/keys").mongoURI;

// connect to mongo
mongoose.connect(db).then(() => console.log("MongoDB Connected...")).catch(err => console.log(err))

// db.sequelize.sync({force: true}).then(() => {
//   console.log("Drop and Resync with {force: true}");
// });

//use routes
//anything that uses the route /api/inventory, should refer to the routes const, which provides the file containing routes
// app.use("/api/inventory", routes);
// require("./routes/api/inventory")(app);

app.use("/api/inventory", inventory)

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