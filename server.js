const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

//initialize express
const app = express();

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//provide db connection information
const db = require("./config/config")

db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and Resync with {force: true}");
});

//use routes
//anything that uses the route /api/inventory, should refer to the routes const, which provides the file containing routes
// app.use("/api/inventory", routes);
require("./routes/api/inventory")(app);

const port = process.env.PORT || 5000;

// Binds and listens for connections on the specified host and port
// app.listen([port[, host[, backlog]]][, callback])
app.listen(port, () => console.log(`Server started on port ${port}`));