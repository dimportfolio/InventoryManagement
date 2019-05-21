module.exports = function(app) {

  const inventory = require("../../controller/controller")

  //create new inventory
  app.post("/api/inventory/create", inventory.create);

  //retrieve all inventory items
  app.get("/api/inventory", inventory.findAll);

  //retrieve a single inventory item by id
  app.get("/api/inventory/:id", inventory.findById);

  //update a inventory item by id
  app.put("/api/inventory/:id", inventory.update);

  //delete a inventory item by id
  app.delete("/api/inventory/:id", inventory.delete);
}