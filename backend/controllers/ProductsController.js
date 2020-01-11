var db = require('../models/index');

module.exports.getOne = (req, res) => {
  db.Products.findByPk(req.params.id)
    .then(
      (result) => {
        if (result) {
          console.log("[" + "GET".green + "] Product fetched from database successfully.")
          res.status(200).send({
            status: "success",
            result: result
          });
        } else {
          console.log("[" + "GET".green + "] Product not found.")
          res.status(404).send({
            status: "not found"
          })
        }
      }
    )
    .catch(
      () => {
        console.log("[" + "GET".green + "] Product fetch created server error.")
        res.status(500).send({
          status: "error"
        })
      }
    );
};

module.exports.add = (req, res) => {
  db.Products.create(req.body)
    .then(
      (result) => {
        console.log("[" + "POST".yellow + "] Product added successfully.")
        res.status(201).json(result)
      }
    )
    .catch(
      (err) => {
        console.log("[" + "POST".yellow + "] Adding product created server error.")
        res.json(err)
      }
    );
};

module.exports.update = (req, res) => {
  db.Products.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(
      () => {
        console.log("[" + "PUT".blue + "] Product updated successfully.")
        res.status(200).send({
          status: "success"
        })
      }
    )
    .catch(
      (err) => {
        console.log("[" + "PUT".blue + "] Updating product created server error.")
        res.json(err)
      }
    );
};

module.exports.delete = (req, res) => {
  db.Products.destroy({
    where: { id: req.params.id }
  })
    .then(
      () => {
        console.log("[" + "DEL".red + "] Product deleted successfully.")
        res.status(204).send()
      }
    )
    .catch(
      (err) => {
        console.log("[" + "DEL".red + "] Deleting product created server error.")
        res.json(err)
      }
    );
};