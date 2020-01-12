const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");


const Inventory = require("../../models/Inventory");

//create new inventory
router.post("/", auth, (req, res) => {
  const newInventory = new Inventory({
    vendor: req.body.vendor,
    date: req.body.date,
    po: req.body.po,
    material: req.body.material,
    quantity: req.body.quantity
  });

  newInventory.save().then(inventory => res.json(inventory));
});
//retrieve all inventory items
router.get("/", (req, res) => {
  Inventory.find()
    .sort({ date: -1 })
    .then(inventory => res.json(inventory))
});

//retrieve a single inventory item by id
// app.get("/api/inventory/:id", inventory.findById);

// //update a inventory item by id
// router.put("/api/inventory/:id", inventory.update);

// //delete a inventory item by id
router.delete("/:id", auth, (req, res) => {
  Inventory.findById(req.params.id)
    .then(inventory => inventory.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;