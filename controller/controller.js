//bring in db connection and associated model
const db = require("../config/config");
const Inventory = db.Inventory;

//PUT new inventory
exports.create = (req, res) => {
  Inventory.create({
    // id: req.body.id,
    vendor: req.body.vendor,
    date: req.body.date,
    po: req.body.po,
    material: req.body.material,
    quantity: req.body.quantity
  }).then(result => {
    res.send(result)
  }).catch(err => {
    res.status(500).send(`Err -> ${err}`)
  });
};

//GET all inventory
exports.findAll = (req, res) => {
  Inventory.findAll().then(result => {
    res.send(result);
  }).catch(err => {
    res.status(500).send(`Err -> ${err}`);
  });
};

//GET specific inventory item
// exports.findById = (req, res) => {
//   Inventory.findById(req.params.id).then(result => {
//     res.send(result);
//   }).catch(err => {
//     res.status(500).send(`Err -> ${err}`);
//   });
// };

//UPDATE specific inventory item
exports.update = (req, res) => {
  Inventory.update({
    vendor: req.body.vendor,
    date: req.body.date,
    po: req.body.po,
    material: req.body.material,
    quantity: req.body.quantity
  },{
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.status(200).send(result);
  }).catch(err => {
    res.status(500).send(`Err -> ${err}`);
  });
};

//DELETE specific inventory item
exports.delete = (req, res) => {
  Inventory.destroy ({
    where: {
      id: req.params.id
    }
  }).then((result) => {
    res.status(200).sendStatus(200);
  }).catch(err => {
    res.status(500).send(`Error -> ${err}`);
  });
};