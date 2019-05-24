const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  vendor: {
    type: String
  },
  date: {
    type: String
  },
  po: {
    type: String
  },
  material: {
    type: String
  },
  quantity: {
    type: Number
  }
})

module.exports = Inventory = mongoose.model("inventory", InventorySchema);